'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

    this.config.defaults({
      'name': this.appname,
      'description': 'An awesome project',
      'homepage': '',
      'license': 'MIT',
      'author': '',
      'email': '',
      'url': '',
      'main': 'index.js',
      'keywords': '',
      'scripts': '',
      'explanation': 'An awesome project that does awesome things!',
      'private': false
    });

    this.option('name', {
      default: this.config.get('name'),
      hide: true,
      type: String
    });
    this.option('description', {
      default: this.config.get('description'),
      hide: true,
      type: String
    });
    this.option('homepage', {
      default: this.config.get('homepage'),
      hide: true,
      type: String
    });
    this.option('license', {
      default: this.config.get('license'),
      hide: true,
      type: String
    });
    this.option('author', {
      default: this.config.get('author'),
      hide: true,
      type: String
    });
    this.option('email', {
      default: this.config.get('email'),
      hide: true,
      type: String
    });
    this.option('url', {
      default: this.config.get('url'),
      hide: true,
      type: String
    });
    this.option('main', {
      default: this.config.get('main'),
      hide: true,
      type: String
    });
    this.option('keywords', {
      default: this.config.get('keywords'),
      hide: true,
      type: String
    });
    this.option('scripts', {
      default: this.config.get('scripts'),
      hide: true,
      type: String
    });
    this.option('explanation', {
      default: this.config.get('explanation'),
      hide: true,
      type: String
    });
    this.option('private', {
      default: this.config.get('private'),
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

      const fyp = ' for your project?';
      const plural = 'What are some ';
      const str = 'What\'s your project\'s ';

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
          default: this.options.homepage,
          message: 'What\'s the url of your project\'s homepage?',
          name: 'homepage',
          store: false,
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
          message: 'Which license would you like to use?',
          name: 'license',
          store: true,
          type: 'list'
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
          message: 'What\'s the url for your personal website, Github profile, or some page about you?',
          name: 'url',
          store: true,
          type: 'input'
        },
        {
          default: this.options.private,
          message: 'Is your project private?',
          name: 'private',
          store: true,
          type: 'confirm'
        },
        {
          default: this.options.keywords,
          message: plural + 'keywords' + fyp + '(Example: keyword1, keyword2)',
          name: 'keywords',
          store: false,
          type: 'input'
        },
        {
          default: this.options.scripts,
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

    const licenses = {
      'Apache 2.0': 'Apache-2.0',
      'MIT': 'MIT',
      'Mozilla Public License 2.0': 'MPL-2.0',
      'BSD 2-Clause (FreeBSD) License': 'BSD-2-Clause-FreeBSD',
      'BSD 3-Clause (NewBSD) License': 'BSD-3-Clause',
      'Internet Systems Consortium (ISC) License': 'ISC',
      'GNU AGPL 3.0': 'AGPL-3.0',
      'GNU GPL 3.0': 'GPL-3.0',
      'GNU LGPL 3.0': 'LGPL-3.0',
      'Unlicense': 'unlicense',
      'No License (Copyrighted)': 'nolicense'
    };
    const opts = {
      name: this.options.name,
      email: this.options.email,
      website: this.options.url,
      license: licenses[this.options.license]
    };
    this.composeWith(require.resolve('generator-license'), opts);
    this.config.set({'name': this.options.name});
    const one = {
      'name': this.options.name,
      'version': '0.0.0'
    };
    const two = {
      'description': this.options.description,
      'main': this.options.main,
      'license': this.options.license,
      'private': this.options.private
    };
    this.config.set(two);
    const pkg = Object.assign(one, two);
    if (this.options.homepage.length > 0) {
      pkg['homepage'] = this.options.homepage;
      this.config.set({'homepage': this.options.homepage});
    }
    if (this.options.author.length > 0 || this.options.email.length > 0 || this.options.url.length > 0) {
      pkg['author'] = new Object();
    }
    if (this.options.author.length > 0) {
      pkg['author']['name'] = this.options.author;
      this.config.set({'author': this.options.author});
    }
    if (this.options.email.length > 0) {
      pkg['author']['email'] = this.options.email;
      this.config.set({'email': this.options.email});
    }
    if (this.options.url.length > 0) {
      pkg['author']['url'] = this.options.url;
      this.config.set({'url': this.options.url});
    }
    if (this.options.scripts.length > 0) {
      const keywords = this.options.keywords.replace(/ /g, '').split(',');
      pkg['keywords'] = keywords;
      this.config.set({'keywords': keywords});
    }
    if (this.options.scripts.length > 0) {
      this.config.set({'scripts': this.options.scripts});
      pkg['scripts'] = new Object();
      const scripts = this.options.scripts.split(',');
      let command;
      for (let q = 0; q < scripts.length; q++) {
        command = scripts[q].split(':');
        if (command[1].startsWith(' ')) {
          command[1] = command[1].substring(1);
        }
        pkg['scripts'][command[0].replace(/ /g, '')] = command[1];
      }
    }
    this.fs.writeJSON('./package.json', pkg);
    this.config.set({'explanation': this.options.explanation});

  }

};
