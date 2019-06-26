const gameSparks = require('../GameSparks');

test('JS require: should not crush', () => {
    expect(gameSparks).toBeDefined();
})