test("should renturn the total number of characters", () => {
  function totalCharsInName(name) {
    return name.length;
  }

  expect(totalCharsInName("Steve")).toEqual(5);
});
