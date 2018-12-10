/**
 * tsc file.ts --out output.js --> to get a custom output file
 * tsc file.ts --out output.js --watch --> if there is any change in file it'll compile again
 * tsc -help --> to see all the command line arguments
 */
class Someone{
    lastName:string;
    firstName:string;
}

let someone=new Someone(); 