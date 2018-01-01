"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DOM = {
    element: function (id) {
        return document.getElementById(id);
    },
    first: function (cls) {
        return document.getElementsByClassName(cls)[0];
    },
    last: function (cls) {
        var items = document.getElementsByClassName(cls);
        return items[items.length - 1];
    },
    input: function (id) {
        return document.getElementById(id);
    },
    all: function (cls) {
        return document.getElementsByClassName(cls);
    }
};
exports.DOM = DOM;
