const saludo = require('./index');

test('Debería retornar "Hola Mundo"', () => {
  expect(saludo()).toBe("Hola Mundo");
});
