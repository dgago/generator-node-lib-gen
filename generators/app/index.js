'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Bienvenido al ${chalk.red('generator-node-lib-gen')}!`));

    const prompts = [
      {
        type: 'input',
        require: true,
        name: 'appname',
        message: 'Cuál es el nombre de tu app?',
        default: this.appname
      },
      {
        type: 'input',
        require: true,
        name: 'name',
        message: 'Cuál es tu nombre?'
      },
      {
        type: 'input',
        require: true,
        name: 'email',
        message: 'Cuál es tu email?'
      },
      {
        type: 'input',
        require: false,
        name: 'website',
        message: 'Cuál es tu website? (Dejar vacío si no tienes)'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const files = [
      '.gitignore',
      'jest.config.js',
      'LICENSE',
      'package.json',
      'build.bat',
      'dts-bundle.json',
      'README.md',
      'tsconfig.json',
      'tslint.json',
      'src/index.ts',
      'src/__tests__/index.test.ts'
    ];

    for (const f of files) {
      this.fs.copyTpl(this.templatePath(f), this.destinationPath(f), this.props);
    }
  }

  install() {
    // This.installDependencies({
    //   npm: true
    // });
  }
};
