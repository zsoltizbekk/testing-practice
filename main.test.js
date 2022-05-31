import {add} from "./main";
import {subtract} from "./main";
import {multiply} from "./main";
import {divide} from "./main";
import {capitalize} from "./main";
import {reverseString} from "./main";
import {caesarCipher} from "./main";
import {analyzeArray} from "./main";

//add
it("it adds positive integers", () => {
    expect(add(10, 2)).toBe(12);
});

it ("it adds negative integers", () => {
    expect(add(-1, -2)).toBe(-3);
});

//subtract
it("it can subtract two positive integers", () => {
    expect(subtract(5, 3)).toBe(2);
});

it("it can subtract negative integers", () => {
    expect(subtract(5, -3)).toBe(8);
});

//multiply
it("it can multiply integers", () => {
    expect(multiply(3, 4)).toBe(12);
});

it("it can multiply with 0", () => {
    expect(multiply(3, 0)).toBe(0);
});

//divide
it("it knows you can not divide with 0", () => {
    expect(divide(3, 0)).toBe("You cant divide with 0!");
});
it("it can divide", () => {
    expect(divide(6,2)).toBe(3);
});

//capitalize
it("it can capitalize first letter", () => {
    expect(capitalize("asd")).toBe("Asd");
});
it("it works with already capitalized letters", () => {
    expect(capitalize("Asd")).toBe("Asd");
});

//reverseString
it("it can reverse strings", () => {
    expect(reverseString("asd")).toBe("dsa");
});
it("works with capital letters", () => {
    expect(reverseString("Asd")).toBe("dsA");
});

//caesarCipher
it("it can encrypt with Caesar Cipher", () => {
    expect(caesarCipher("asd")).toBe("bte");
});
it("it wont effected be the capital letters", () => {
    expect(caesarCipher("AsD")).toBe("bte");
})
it("it will skip punctuation", () => {
    expect(caesarCipher("asd, qwe")).toBe("bte, rxf");
});

//analyzeArray
it("works", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});