import { sqrt, evaluate } from "mathjs";
import {
	keepsOne,
	keepsZero,
	pascal,
	linear,
	singleVariable,
	monoSlow,
	analyzeFunctionString,
} from "../lib/Analysis";

// describe("Basic boolean math", () => {
// 	test("Test math library", () => {
// 		expect(evaluate("1 and 1")).toBe(true);
// 		expect(evaluate("1 xor 1")).toBe(false);
// 		expect(evaluate("1 and 0")).toBe(false);
// 		expect(evaluate("0 and 0")).toBe(false);
// 	});
// 	keepsOne("1001");
// });

// describe("Basic boolean math", () => {
// 	test("Test boolean criteria", () => {
// 		expect(keepsOne("1000")).toBe(false);
// 		expect(keepsOne("0001")).toBe(true);
// 		expect(keepsZero("1000")).toBe(false);
// 		expect(keepsZero("0001")).toBe(true);
// 		expect(pascal("11101100")).toBe("10010011");
// 	});
// 	// console.log(linear("11101100"));
// 	// console.log(monoSlow("11111111"))
// 	console.log(monoSlow("0001"));
// });

describe("Test basic functions", () => {
        test("Not", () => {
		expect(analyzeFunctionString("10")).toMatchObject({
			keepsZero: false,
			keepsOne: false,
			mono: false,
                        linear: true,
                        s: true,
		});
	});
	test("And", () => {
		expect(analyzeFunctionString("0001")).toMatchObject({
			keepsZero: true,
			keepsOne: true,
			mono: true,
                        linear: false,
                        s: false,
		});
        });
        test("Or", () => {
		expect(analyzeFunctionString("0111")).toMatchObject({
			keepsZero: true,
			keepsOne: true,
			mono: true,
                        linear: false,
                        s: false,
		});
        });
        test("Sheffer", () => {
		expect(analyzeFunctionString("1110")).toMatchObject({
			keepsZero: false,
			keepsOne: false,
			mono: false,
                        linear: false,
                        s: false,
		});
        });
        test("Pierce", () => {
		expect(analyzeFunctionString("1000")).toMatchObject({
			keepsZero: false,
			keepsOne: false,
			mono: false,
                        linear: false,
                        s: false,
		});
        });

        test("True", () => {
		expect(analyzeFunctionString("1")).toMatchObject({
			keepsZero: false,
			keepsOne: true,
			mono: true,
                        linear: true,
                        s: false,
		});
        });

        test("False", () => {
		expect(analyzeFunctionString("0")).toMatchObject({
			keepsZero: true,
			keepsOne: false,
			mono: true,
                        linear: true,
                        s: false,
		});
        });

        test("Implication", () => {
		expect(analyzeFunctionString("1011")).toMatchObject({
			keepsZero: false,
			keepsOne: true,
			mono: false,
                        linear: false,
                        s: false,
		});
        });
        
            
});
