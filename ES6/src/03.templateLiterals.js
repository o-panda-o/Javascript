"use strict"
/**
 * - User of ``
 * - Variable binding
 * - Function binding
 */
let name='Bibhuti';
function makeUpperCase(word){
    return word.toUpperCase();
}
let template=`
<h1>${makeUpperCase('Hello,')} ${name}</h1>
<p>This is a simple paragraph showing how \` could be used to make our
life easier than '</p>`;
document.getElementById('template').innerHTML = template;