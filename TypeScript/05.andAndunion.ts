// By default it is type `any`, if defined otherwise
var a;
a=10;
a=true;
a='Hello';

// `union` type
var b: number|boolean;
b=10;
b=true;
// It'll throw an error
// b='Hello';
