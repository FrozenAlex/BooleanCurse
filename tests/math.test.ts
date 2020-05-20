import {
	analyzeFunctionString,
} from "../lib/Analysis";
import { evalFunction } from "../lib/Parser";

describe("Test parser", () => {
	test("And", () => {
		expect(evalFunction("a and b")).toBe("0001");
	})

	test("And or", () => {
		expect(evalFunction("a and b or c")).toBe("01010111");
	})

	test("()", () => {
		expect(evalFunction("a and (b or c)")).toBe("00000111");
	})

	test("const", () => {
		expect(evalFunction("a and 1")).toBe("01");
	})
})

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
