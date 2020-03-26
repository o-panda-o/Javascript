const {companies,ages} = require('./constants');

console.clear();
/**
 * For each loop
 */
companies.forEach(company=>console.log(company));

/**
 * Filter
 */
let canDrink=ages.filter(age=>age>=21);
console.log('canDrink');
console.log(canDrink);

let retailCompanies=companies.filter(company=>company.category==='Retail');
console.log('retailCompanies');
console.log(retailCompanies);

let companiesFrom80s=companies.filter(company=>company.start>=1980 && company.start<=1989);
console.log('companiesFrom80s');
console.log(companiesFrom80s);

let companiesLasted10Years=companies.filter(company=>company.end-company.start>=10);
console.log('companiesLasted10Years');
console.log(companiesLasted10Years);

/**
 * Map
 */
let companyNames=companies.map(company=>`${company.name} [${company.start} - ${company.end}]`);
console.log('companyNames');
console.log(companyNames);

let agesSqrted=ages.map(age=>Math.sqrt(age));
console.log('agesSqrted');
console.log(agesSqrted);

/**
 * Sort
 */
let sortedComapnies=companies.sort((o1,o2)=>o1.start-o2.start);
console.log('sortedComapnies');
console.log(sortedComapnies);

let sortedAges=ages.sort((a,b)=>b-a);
console.log('sortedAges');
console.log(sortedAges);

/**
 * Reduce
 */
let ageSum=ages.reduce((total,age)=>total+age,0);
console.log('ageSum');
console.log(ageSum);

let totalYearsOfCompanies=companies.reduce((total,company)=>total+(company.end-company.start),0);
console.log('totalYearsOfCompanies');
console.log(totalYearsOfCompanies);

/**
 * All combined
 */
let combined=ages.filter(age=>age>=20).map(age=>age*20).sort((a,b)=>a-b).reduce((a,b)=>a+b,0);
console.log('combined');
console.log(combined);