const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculaDescontos,
};


// "scripts": {
//   "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
//   "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --watch",
//   "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --coverage"
// },