import alphabet from "../../utils/alphabet"

test('it should be return All English Alphabet Letters', () => {
  const mockedAlphabetArray = alphabet;
  expect(mockedAlphabetArray).toHaveLength(26)
});


test("it should be include [ABCZ]", ()=> {
  const hasArray = alphabet.includes("A","B","C","Z")
  expect(hasArray).toBe(true)
})

test("it should not be A LowerCase", ()=>{
  const a = alphabet?.[0];
  const isUpperCase = a === "A"
  expect(isUpperCase).toBe(true)
})