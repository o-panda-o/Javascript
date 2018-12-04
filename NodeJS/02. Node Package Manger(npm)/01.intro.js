// to get the version of npm
// npm -v; 

// install anything globally
// npm -i -g <module>; 

// to create package.json
// npm init
// npm init --yes

// install a package
// npm i underscore
// npm install underscore

// install everything inside package.json
// npm -i

// Semantic versioning(SemVer) in dependencies
// ^Major.Minor.Patch  // 1.2.3
// ~Major.Minor.Patch // 1.8.x (Not good)
// Major.Minor.Patch(exact versioning) // 1.4.5

// To see all the installed packages
// npm list --depth=0

// To see all the dependency of a package
// npm view <package-name> 
// npm view <package-name> dependencies
// npm view <package-name> versions

// Installing a particular version of software
// npm install <package-name>@<version>
// npm install <package-name>@<version> -g

// To find what version is current
// npm outdated

// To update a package
// npm update

// To update to current update
// npm i -g npm-check-update

// To update package.json
// npm-check-update -u
// ncu -u

// Adding developer dependency
// npm i <package> --save-dev

// Uninstalling a package
// npm un <package>
// npm uninstall <package>

// Adding a user to npm
// npm add user

// Logging in
// npm login

// To publish a package
// npm publish

// To open in vscode
// code .