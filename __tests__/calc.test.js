const Calc = require('../calc');
const calc = new Calc();

describe("multiplication function", () => {
    it("should return 6 when called with 2 and 3", () => {
        expect(calc.multiplication(2, 3)).toBe(6);
    });

    it("should return -6 when called with -2 and 3", () => {
        expect(calc.multiplication(-2, 3)).toBe(-6);
    });

    it("should return 0 when called with 0 and 0", () => {
        expect(calc.multiplication(0, 0)).toBe(0);
    });

    it("should return 4 when called with -2 and -2", () => {
        expect(calc.multiplication(-2, -2)).toBe(4);
    })

    it("should return a message when called with an string and number", () => {
        expect(calc.multiplication("1", 2)).toBe("Please provide numbers only");
    })
})

describe("sum function", () => {
    it("should return 3 when called with 1 and 2", () => {
        expect(calc.sum(1, 2)).toBe(3);
    });

    it("should return -1 when called with 1 and -2", () => {
        expect(calc.sum(1, -2)).toBe(-1);
    });

    it("should return 0 when called with 0 and 0", () => {
        expect(calc.sum(0, 0)).toBe(0);
    });

    it("should return a message when called with an string and number", () => {
        expect(calc.sum("1", 2)).toBe("Please provide numbers only");
    })
})

describe("div function", () => {
    it("should return 1 when called with 1 and 1", () => {
        expect(calc.div(1, 1)).toBe(1);
    })

    it("should return a message when called with an string and number", () => {
        expect(calc.div("1", 2)).toBe("Please provide numbers only");
    })

    it("should return an negative number when called with an negative number", () => {
        expect(calc.div(-4, 2)).toBe(-2);
    })

    it("should return an message when the second parameter be 0", () => {
        expect(calc.div(4, 0)).toBe("Please provide a number different than 0");
    })
})

describe ("sub function", () => {
    it("should return -1 when called with 1 and 2", () => {
        expect(calc.sub(1, 2)).toBe(-1);
    })

    it("should return 3 when called with 1 and -2", () => {
        expect(calc.sub(1, -2)).toBe(3);
    })

    it("should return a message when called with an string and number", () => {
        expect(calc.sub("1", 2)).toBe("Please provide numbers only");
    })
})
