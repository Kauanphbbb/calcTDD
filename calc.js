class Calc {
    sum(a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return "Please provide numbers only";
        }
        return a + b;
    }

    multiplication(a, b) {
        if(typeof a === "string" || typeof b === "string") {
            return "Please provide numbers only";
        }

        return a * b;
    }

    div(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return "Please provide numbers only";
        }

        if (b === 0) {
            return "Please provide a number different than 0";
        }

        return a / b;

    }

    sub(a, b) {
        if(typeof a === "string" || typeof b === "string") {
            return "Please provide numbers only";
        }

        return a - b;
    }
}

module.exports = Calc;