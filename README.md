# Getting Started with Create React App With Test Using Jest and Enzyme



## Mocking CSS Modules#
You can use an ES6 Proxy to mock CSS Modules:
## Main Packages
npm install --save-dev jest@26.6.0 babel-jest@26.6.0 identity-obj-proxy

## Install Enzyme
## https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17

npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17

## This is useful when using selectors like data-test to run selenium test. Those properties are useless when running the code in production. You can save bandwidth by removing them.

npm i --save-dev babel-plugin-react-remove-properties

## type in package.json file
"test": "jest --watch", 

## if there is not .git/hg
or "jest --watchAll"
--watch ==> flag

## to run test
npm run test
npm test

## Available Plugins not needed
npm i --save-dev @babel/plugin-transform-react-jsx

npm i --save-dev babel-plugin-transform-decorators-legacy babel-plugin-transform-export-extensions @babel/core 

## Helpful link

https://stackoverflow.com/questions/62820035/babel-throwing-support-for-the-experimental-syntax-jsx-isnt-currently-enabled

https://www.npmjs.com/package/babel-jest

https://www.npmjs.com/package/jest-enzyme

## Jest docs
https://jestjs.io/docs/expect


## Enzyme js docs
https://enzymejs.github.io/enzyme/docs/api/

## Selector type
https://enzymejs.github.io/enzyme/docs/api/selector.html

## [Solved] SyntaxError: Support for the experimental syntax ‘jsx’ isn’t currently enabled
https://exerror.com/syntaxerror-support-for-the-experimental-syntax-jsx-isnt-currently-enabled/

https://javascript.tutorialink.com/syntaxerror-unexpected-token/


## To start server after react build or production app without data-test attribute
npm install --save-dev babel-plugin-react-remove-properties

## add it to package.json or .babelrc
"babel": {
    "env": {
      "production": {
        "plugins": [
          [
            "react-remove-properties",
            {
              "properties": [
                "data-test"
              ]
            }
          ]
        ]
      }
    },
    "presets": [
      "react-app"
    ]
  }

## Next
npm run eject

## Start static server
npm i -g serve 
serve -s build

## for mac or ubuntu globally install 
sudo npm i -g serve 



## TDD == Test Driven Development

## If any problem to start react in the case testing
To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock 
in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "babel-jest" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you 
use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:  

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if E:\Office-Work\CN\Training\REACT-TYPESCRIPT\React-Test\react-test\node_modules\babel-jest is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls babel-jest in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed babel-jest.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!


