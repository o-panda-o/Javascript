/**
 * To get type definition of `lodash` inside typescript we need to do:
 *  + npm install @types/lodash --save-dev
 */

import { Person } from "./person";
import * as _ from 'lodash';

let me=new Person();
me.firstName='Bibhuti';
me.lastName='Panda';

console.log(me);

var array=[1,2,3,4,5,6];
console.log(_.reverse(array));
