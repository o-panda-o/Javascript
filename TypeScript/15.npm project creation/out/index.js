"use strict";
/**
 * To get type definition of `lodash` inside typescript we need to do:
 *  + npm install @types/lodash --save-dev
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var _ = __importStar(require("lodash"));
var me = new person_1.Person();
me.firstName = 'Bibhuti';
me.lastName = 'Panda';
console.log(me);
var array = [1, 2, 3, 4, 5, 6];
console.log(_.reverse(array));
