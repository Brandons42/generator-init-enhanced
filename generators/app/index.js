'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const username = require('username');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

    const uname = username.sync();

    this.option('name', {
      default: this.appname,
      hide: true,
      type: String
    });
    this.option('description', {
      alias: 'desc',
      default: 'An awesome project',
      hide: true,
      type: String
    });
    this.option('repository', {
      alias: 'rp',
      default: '',
      hide: true,
      type: String
    });
    this.option('license', {
      alias: 'lcs',
      default: 'MIT',
      hide: true,
      type: String
    });
    this.option('author', {
      alias: 'auth',
      default: '',
      hide: true,
      type: String
    });
    this.option('email', {
      default: '',
      hide: true,
      type: String
    });
    this.option('url', {
      default: '',
      hide: true,
      type: String
    });
    this.option('main', {
      default: 'index.js',
      hide: true,
      type: String
    });
    this.option('keywords', {
      hide: true,
      type: String
    });
    this.option('scripts', {
      alias: 's',
      hide: true,
      type: String
    });
    this.option('explanation', {
      alias: 'exp',
      default: 'An awesome project that does awesome things!',
      hide: true,
      type: String
    });
    this.option('private', {
      alias: 'priv',
      default: false,
      hide: true,
      type: Boolean
    });
    this.option('yes', {
      alias: 'y',
      default: false,
      desc: 'A flag for if you\'d like to skip prompting',
      hide: false,
      type: Boolean
    });

  }

  initializing() {

    this.log(yosay(
      'Welcome to the marvelous ' + chalk.red('Init Enhanced') + ' Yeoman generator!'
    ));

  }

  prompting() {

    if (!this.options.yes) {

      const str = 'What\'s your project\'s ';
      const plural = 'What are some ';
      const fyp = ' for your project?';


      return this.prompt([
        {
          default: this.options.name,
          message: str + 'name?',
          name: 'name',
          store: false,
          type: 'input'
        },
        {
          default: this.options.description,
          message: 'Give a brief and to the point description of your project',
          name: 'description',
          store: false,
          type: 'input'
        },
        {
          default: this.options.explanation,
          message: 'Now, give a slightly longer and more detailed description',
          name: 'explanation',
          store: false,
          type: 'input'
        },
        {
          default: this.options.main,
          message: str + 'entry point?',
          name: 'main',
          store: true,
          type: 'input'
        },
        {
          default: this.options.repository,
          message: str + 'repository url?',
          name: 'repository',
          store: false,
          type: 'input'
        },
        {
          default: this.options.author,
          message: 'What\'s your name?',
          name: 'author',
          store: true,
          type: 'input'
        },
        {
          default: this.options.email,
          message: 'What\'s your email?',
          name: 'email',
          store: true,
          type: 'input'
        },
        {
          default: this.options.url,
          message: 'What\'s the url for your personal website?',
          name: 'url',
          store: true,
          type: 'input'
        },
        {
          choices: [
            'Apache 2.0',
            'BSD 2-Clause (FreeBSD) License',
            'BSD 3-Clause (NewBSD) License',
            'GNU AGPL 3.0',
            'GNU GPL 3.0',
            'GNU LGPL 3.0',
            'Internet Systems Consortium (ISC) License',
            'MIT',
            'Mozilla Public License 2.0',
            'No License (Copyrighted)',
            'Unlicense'
          ],
          default: this.options.license,
          message: str + 'license?',
          name: 'license',
          store: true,
          type: 'list'
        },
        {
          default: this.options.private,
          message: 'Is your project private?',
          name: 'private',
          store: true,
          type: 'confirm'
        },
        {
          default: typeof this.options.keywords === 'undefined' ? this.options.keywords : undefined,
          message: plural + 'keywords' + fyp + '(Example: keyword1, keyword2)',
          name: 'keywords',
          store: false,
          type: 'input'
        },
        {
          default: typeof this.options.scripts === 'undefined' ? this.options.scripts : undefined,
          message: plural + 'scripts' + fyp + '(Example: commands: command1 && comand2, execute: execution1 && execution2)',
          name: 'scripts',
          store: false,
          type: 'input'
        }
      ]).then(options => {
        this.options = options;
      });

    }

  }

  writing() {

    const pkg = {
      'name': this.options.name,
      'version': '0.0.0',
      'description': this.options.description,
      'main': this.options.main,
      'repository': this.options.repository,
      'license': this.options.license,
      'private': this.options.private,
      'author': {
        'name': this.options.author,
        'email': this.options.email,
        'url': this.options.url
      }
    };
    if (typeof this.options.keywords === 'String') {
      const keywords = this.options.keywords.replace(/ /g, '').split(',');
      pkg['keywords'] = keywords;
    }
    if (typeof this.options.scripts === 'String') {
      pkg['scripts'] = new Object();
      const scripts = this.options.scripts.split(',');
      let command;
      for (let q = 0; q < scripts.length; q++) {
        command = scripts[q].split(':');
        if (command[1][0] == ' ') {
          command[1] = command[1].substring(1);
        }
        pkg['scripts'][command[0].replace(/ /g, '')] = command[1];
      }
    }
    this.fs.writeJSON('./package.json', pkg);

    /*this.composeWith(require.resolve('generator-license'), {
      name: 'John Doe', // (optional) Owner's name
      email: 'john.doe@example.com', // (optional) Owner's email
      website: 'https://example.com', // (optional) Owner's website
      year: '1945', // (optional) License year (defaults to current year)
      licensePrompt: 'Which license do you want to use?' // (optional) customize license prompt text
      defaultLicense: 'MIT', // (optional) Select a default license
      license: 'MIT', // (optional) Select a license, so no license prompt will happen, in case you want to handle it outside of this generator
    });*/

  }

};
