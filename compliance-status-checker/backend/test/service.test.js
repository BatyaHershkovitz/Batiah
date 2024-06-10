const { getObjToDB } = require('../src/services/add-exchange-month')

test('should return obj', async () => {
    const res = await getObjToDB(new Date('10-06-2024'))
    expect(res.average).toBe(3.7581);
    expect(res.date).toBe('10/2024');
    expect(res.month).toBe('October');
    expect(res.numMonth).toBe(10);
    expect(res.year).toBe(2024);
});