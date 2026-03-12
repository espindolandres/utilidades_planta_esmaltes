import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const formulas = JSON.parse(fs.readFileSync(path.join(root, 'data', 'silos-formulas.json'), 'utf8'));
const siloTables = JSON.parse(fs.readFileSync(path.join(root, 'data', 'silos-tables.json'), 'utf8'));
const tanks = JSON.parse(fs.readFileSync(path.join(root, 'data', 'tanks.json'), 'utf8'));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function approxEqual(actual, expected, tolerance, label) {
  if (Math.abs(actual - expected) > tolerance) {
    throw new Error(`${label}: esperado ${expected}, obtenido ${actual}`);
  }
}

function interp(points, xIndex, yIndex, x) {
  const sorted = [...points].sort((a, b) => a[xIndex] - b[xIndex]);
  assert(x >= sorted[0][xIndex] && x <= sorted[sorted.length - 1][xIndex], 'valor fuera de rango');
  for (let i = 0; i < sorted.length - 1; i += 1) {
    const a = sorted[i];
    const b = sorted[i + 1];
    if (x >= a[xIndex] && x <= b[xIndex]) {
      const t = (x - a[xIndex]) / (b[xIndex] - a[xIndex]);
      return a[yIndex] + t * (b[yIndex] - a[yIndex]);
    }
  }
  throw new Error('no se pudo interpolar');
}

function run(name, fn) {
  try {
    fn();
    console.log(`OK  ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

run('hay 38 fórmulas de silos lineales', () => {
  assert(Object.keys(formulas).length === 38, 'cantidad inesperada');
});

run('silo 1 calcula litros desde altura', () => {
  const { a, b } = formulas['1'];
  approxEqual((a * 100) + b, 2627.81, 0.001, 'silo 1 a 100 cm');
});

run('silo 39 interpola correctamente', () => {
  const pts = siloTables['Silo 39 (Medida cm ↔ Litros)'].points;
  approxEqual(interp(pts, 0, 1, 27), 450, 0.001, 'silo 39 a 27 cm');
});

run('silos 41-42 convierten vacío a litros', () => {
  const pts = siloTables['Silos 41-42 (Vacío ↔ Litros)'].vacioPoints;
  approxEqual(interp(pts, 0, 1, 140), 2816, 0.001, 'silos 41-42 a vacío 140');
});

run('tanque 500L interpola altura a litros', () => {
  const pts = tanks['500L'].points;
  approxEqual(interp(pts, 0, 1, 25.75), 125, 0.001, '500L a 25.75 cm');
});

run('tanque lineal silo 13 mantiene pendiente', () => {
  const def = tanks['Silo 13 (Alfacer 4)'];
  approxEqual(def.maxH * def.litersPerCm, 2318.2, 0.001, 'capacidad lineal');
  approxEqual(100 * def.litersPerCm, 1730, 0.001, '100 cm');
});

if (!process.exitCode) {
  console.log('\nTodas las pruebas pasaron.');
}
