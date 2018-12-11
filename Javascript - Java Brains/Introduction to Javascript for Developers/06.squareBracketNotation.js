/**
 * Use [] notation when:
 *  + Property name is a reserved word/invalid identifier
 *  + Property name starts with a number
 *  + Property name is dynamic
 */
reservedWords={
    "1":"one"
};
console.log(reservedWords);
// console.log(reservedWords.1); -- It'll throw an error
console.log(reservedWords["1"]);

var propertyName="1";
console.log(reservedWords[propertyName]);

