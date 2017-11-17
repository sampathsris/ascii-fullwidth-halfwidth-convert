"use strict";

/*
 * Full-width ASCII variants range from 0xFF01 to 0xFF5E.
 * Therefore the non-inclusive upper and lower bounds for
 * this range is 0xFF00 and 0xFF5F.
 * 
 * 0x3000 is the Ideographic Space, which is the full-width
 * equivalent of space (0x0020) in ASCII.
 */

const toFullWidth = (charCode) => {
    if (0x0020 < charCode && charCode < 0x007F) {
        return 0xFF00 + (charCode - 0x0020);
    }

    if (0x0020 === charCode) {
        return 0x3000;
    }

    return charCode;
};

const toHalfWidth = (charCode) => {
    if (0xFF00 < charCode && charCode < 0xFF5F) {
        return 0x0020 + (charCode - 0xFF00);
    }

    if (0x3000 === charCode) {
        return 0x0020;
    }

    return charCode;
};

const process = (str, charProcess) => {
    let ret = [];

    for (let char of str) {
        ret.push(charProcess(char.charCodeAt()));
    }

    return String.fromCharCode.apply(String, ret);
};

const factory = (charProcessor) => {
    return (str) => {
        return process(str, charProcessor);
    }
}

module.exports = function (options) {
    this.toFullWidth = factory(toFullWidth);
    this.toHalfWidth = factory(toHalfWidth);
};
