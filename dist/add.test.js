"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var add_1 = require("./add");
(0, vitest_1.describe)("add", function () {
    (0, vitest_1.it)("adds numbers", function () {
        (0, vitest_1.expect)((0, add_1.add)(2, 3)).toBe(5);
    });
});
