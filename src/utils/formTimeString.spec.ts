import formTimeString from "./formTimeString"


test("formTimeString adds an 'about' when the unit of time is hours", () => {
  expect(formTimeString(3, 'hours')).toBe('about 3 hours');
  expect(formTimeString(8, 'hours')).toBe('about 8 hours');
  expect(formTimeString(21, 'hours')).toBe('about 21 hours');
})

test("formTimeString does not add an 'about' when the unit of time is minutes", () => {
  expect(formTimeString(5, 'minutes')).toBe('5 minutes');
  expect(formTimeString(14, 'minutes')).toBe('14 minutes');
  expect(formTimeString(27, "minutes")).toBe("27 minutes");
})

test("formTimeString does not add an 'about' when the unit of time is days", () => {
  expect(formTimeString(2, "days")).toBe("2 days");
  expect(formTimeString(3, "days")).toBe("3 days");
  expect(formTimeString(4, "days")).toBe("4 days");
});

test("formTimeString removes the trailing 's' for a singular unit of time", () => {
  expect(formTimeString(1, "minutes")).toBe("1 minute");
  expect(formTimeString(1, "hours")).toBe("about 1 hour");
  expect(formTimeString(1, "days")).toBe("1 day");
})