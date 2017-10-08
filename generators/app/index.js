'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

    this.option('name', {
      default: this.appname,
      hide: true,
      type: String
    });
    this.option('username', {
      hide: true,
      type: String
    });
    this.option('description', {
      alias: 'desc',
      default: 'An awesome project',
      hide: true,
      type: String
    });
    this.option('homepage', {
      alias: 'rp',
      hide: true,
      type: String
    });
    this.option('license', {
      alias: 'lcs',
      hide: true,
      type: String
    });
    this.option('author', {
      alias: 'auth',
      hide: true,
      type: String
    });
    this.option('email', {
      hide: true,
      type: String
    });
    this.option('url', {
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
          //store: true,
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
          default: this.options.author,
          message: 'What\'s your name?',
          name: 'author',
          //store: true,
          type: 'input'
        },
        {
          default: this.options.email,
          message: 'What\'s your email?',
          name: 'email',
          //store: true,
          type: 'input'
        },
        {
          default: this.options.url,
          message: 'What\'s the url for your personal website, Github profile, or some page about you?',
          name: 'url',
          //store: true,
          type: 'input'
        },
        {
          default: this.options.private,
          message: 'Is your project private?',
          name: 'private',
          //store: true,
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

    this.composeWith(require.resolve('generator-license'), {
      name: this.options.name,
      email: this.options.email,
      website: this.options.url,
      licensePrompt: 'Which license do you want to use?',
      defaultLicense: this.options.license
    });

    const pkg = {
      'name': this.options.name,
      'version': '0.0.0',
      'description': this.options.description,
      'main': this.options.main,
      'license': this.options.license,
      'private': this.options.private
    };
    if (typeof this.options.homepage === 'string' && this.options.homepage.length > 0) {
      pkg['homepage'] = this.options.homepage;
    }
    if ((typeof this.options.author === 'string' && this.options.author.length > 0) || (typeof this.options.email === 'string' && this.options.email.length > 0) || (typeof this.options.url === 'string' && this.options.url.length > 0)) {
      pkg['author'] = new Object();
    }
    if (typeof this.options.author === 'string' && this.options.author.length > 0) {
      pkg['author']['name'] = this.options.author;
    }
    if (typeof this.options.email === 'string' && this.options.email.length > 0) {
      pkg['author']['email'] = this.options.email;
    }
    if (typeof this.options.url === 'string' && this.options.url.length > 0) {
      pkg['author']['url'] = this.options.url;
    }
    if (typeof this.options.keywords === 'string' && this.options.scripts.length > 0) {
      const keywords = this.options.keywords.replace(/ /g, '').split(',');
      pkg['keywords'] = keywords;
    }
    if (typeof this.options.scripts === 'string' && this.options.scripts.length > 0) {
      this.log(this.options.scripts);
      this.log(typeof this.options.scripts);
      pkg['scripts'] = new Object();
      const scripts = this.options.scripts.split(',');
      let command;
      for (let q = 0; q < scripts.length; q++) {
        this.log(scripts[q]);
        this.log(scripts[q].split(':'));
        command = scripts[q].split(':');
        if (command[1].startsWith(' ')) {
          command[1] = command[1].substring(1);
        }
        pkg['scripts'][command[0].replace(/ /g, '')] = command[1];
      }
    }
    this.fs.writeJSON('./package.json', pkg);

  }

};
