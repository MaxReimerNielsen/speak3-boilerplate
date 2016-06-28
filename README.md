# SPEAK3 boilerplate
This is a complete start up repository for creating Sitecore applications in React.
Simply download the project as a zip file, and extract it to it's own Visual Studio project folder on your local machine.

## Development
### Project dependencies
- We use [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) for our solution
- *(Optional)* We use [ESLint VSCode extension](https://ms-devlabs.gallery.vsassets.io/items?itemName=dbaeumer.vscode-eslint)*

*: We actively disable VSCodes own JavaScript validation to get proper syntax higlighting on ES7 features like static props on classes.

### Installation
It is recommended to run this command as Administrator in Windows, since it will update pre-commit git hooks. 
```sh
<ProjectRoot> npm install
```

### Start local website
```sh
<ProjectRoot> npm start
```

### Opening the local website
Navigate to [http://localhost:3000](http://localhost:3000) in your favorite browser.

### Building
To build the src files, and move them into the build/ folder, simply execute this in a commandline.

```sh
<ProjectRoot> npm run build
```

### Testing
We use:
- [Mocha](https://mochajs.org) for testing
- [Enzyme](https://github.com/airbnb/enzyme) for traversing React components
- [Chai](http://chaijs.com/) for assertion
- [Chai Spies](https://github.com/chaijs/chai-spies) for spies
- [Karma](https://karma-runner.github.io/) for in browser testing
- [Karma coverage](https://github.com/karma-runner/karma-coverage) for code coverage
- [Istanbul](https://gotwarlost.github.io/istanbul/) for code coverage thresholds

#### Running all tests (Karma, PhantomJS)
```sh
<ProjectRoot> npm run test:all
```

#### Running one spec or folder (Karma, PhantomJS, watch mode enabled)
```sh
<ProjectRoot> npm run test:specific -- --check=PathToSpecJsFileOrFolder
```

#### Running all tests (In given browser, using Karma)
Replace **BROWSER** with the browser choice on your own environment.

Note: Internet Explorer is using 'x-ui-compatible' option for older browsers. 

Browsers options are:
- all
- chrome
- firefox
- phantomjs
- ie
- ie10

```sh
<ProjectRoot> npm run test:karma:BROWSER
```

#### Check code coverage thresholds
After running all tests (works best with single browser), then the coverage folder will be updated with data, and then you can check, if the project meets the thresholds, by running the following commands: 
```sh
<ProjectRoot> npm run test:check-coverage
```

#### Validating the components library
Validating means:
- Validate webpack configuration files
- Lint all files
- Run all tests in all browsers
- Check the code coverage treshold

Simple run this command to do all these steps:
```sh
<ProjectRoot> npm run validate
```

#### Running all tests in VSCode
- Press F1
- Write 'task'
- Select 'Tasks: Run task'
- Select 'test all'

#### Running current open test/component in VSCode (watch mode enabled)
- Press F1
- Write 'task'
- Select 'Tasks: Run test task'

#### Keybind test task in VSCode
Since VSCode does not allow keybindings to be shared across teams, you need to do this in your own environment.
- Press F1
- Write 'keybindings'
- Select 'Preferences: Open Keyboard Shortcuts'
- Copy/paste this line into the array, change key if needed, and then save
```sh
{ "key": "ctrl+shift+t",          "command": "workbench.action.tasks.test" }
```

#### Terminate a running test task in VSCode
- Press F1
- Write 'task'
- Select 'Tasks: Terminate Running Task'