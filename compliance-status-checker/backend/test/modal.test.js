const { insertOneAvg, getAllAvg } = require("../src/modals/exchange-average");

test('should insert one object to mongo', async () => {
    const obj = { numMonth: 1, month: "January", year: 2025, average: 3.5, date: "01/2025" ,key:25}
    const res = await insertOneAvg(obj)
    expect(res.isError).toBe(false);
    expect(res.message).toBe('Success');
});

test('should not insert one -The obj is empty', async () => {
    const obj = {}
    const res = await insertOneAvg(obj)
    expect(res.isError).toBe(true);
    expect(res.message).toBe('Error: The object is empty');
});

test('should get all data', async () => {
    const res = await getAllAvg()
    expect(res.isError).toBe(false);
    expect(res.message).toBe('Success');
});