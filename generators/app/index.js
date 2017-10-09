'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

    this.config.defaults({
      'name': this.appname,
      'license': 'MIT',
      'author': '',
      'email': '',
      'url': '',
      'main': 'index.js',
      'scripts': '',
      'private': false,
      'username': ''
    });

    this.option('name', {
      default: this.config.get('name'),
      hide: true,
      type: String
    });
    this.option('description', {
      default: 'An awesome project',
      hide: true,
      type: String
    });
    this.option('homepage', {
      default: '',
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
      default: '',
      hide: true,
      type: String
    });
    this.option('scripts', {
      default: this.config.get('scripts'),
      hide: true,
      type: String
    });
    this.option('explanation', {
      default: this.options.name + ' is an awesome project that does awesome things.',
      hide: true,
      type: String
    });
    this.option('private', {
      default: this.config.get('private'),
      hide: true,
      type: Boolean
    });
    this.option('username', {
      default: this.config.get('username'),
      hide: true,
      type: String
    });
    this.option('prompt', {
      default: '',
      hide: true,
      type: String
    });
    this.option('yes', {
      alias: 'y',
      default: false,
      desc: 'A flag for if you\'d like to skip prompting',
      hide: false,
      type: Boolean
    });
    let prompts;
    if (this.options.prompt.startsWith('x')) {
      prompts = this.options.prompt.substring(1).replace(/ /g, '').split(',');
      this.toPrompt = {
        'name': true,
        'description': true,
        'explanation': true,
        'main': true,
        'homepage': true,
        'license': true,
        'author': true,
        'email': true,
        'url': true,
        'private': true,
        'keywords': true,
        'scripts': true,
        'username': true
      };
      for (let q = 0; q < prompts.length; q++) {
        this.toPrompt[prompts[q]] = false;
      }
    }
    else if (this.options.prompt.length > 0) {
      prompts = this.options.prompt.replace(/ /g, '').split(',');
      this.toPrompt = {
        'name': false,
        'description': false,
        'explanation': false,
        'main': false,
        'homepage': false,
        'license': false,
        'author': false,
        'email': false,
        'url': false,
        'private': false,
        'keywords': false,
        'scripts': false,
        'username': false
      };
      for (let q = 0; q < prompts.length; q++) {
        this.toPrompt[prompts[q]] = true;
      }
    }
    else {
      this.toPrompt = {
        'name': true,
        'description': true,
        'explanation': true,
        'main': true,
        'homepage': true,
        'license': true,
        'author': true,
        'email': true,
        'url': true,
        'private': true,
        'keywords': true,
        'scripts': true,
        'username': true
      };
    }

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
          type: 'input',
          when: this.toPrompt['name']
        },
        {
          default: this.options.description,
          message: 'Give a brief and to the point description of your project',
          name: 'description',
          store: false,
          type: 'input',
          when: this.toPrompt['description']
        },
        {
          default: this.options.explanation,
          message: 'Now, give a slightly longer and more detailed description',
          name: 'explanation',
          store: false,
          type: 'input',
          when: this.toPrompt['explanation']
        },
        {
          default: this.options.main,
          message: str + 'entry point?',
          name: 'main',
          store: true,
          type: 'input',
          when: this.toPrompt['main']
        },
        {
          default: this.options.homepage,
          message: 'What\'s the url of your project\'s homepage?',
          name: 'homepage',
          store: false,
          type: 'input',
          when: this.toPrompt['homepage']
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
          type: 'list',
          when: this.toPrompt['license']
        },
        {
          default: this.options.author,
          message: 'What\'s your name?',
          name: 'author',
          store: true,
          type: 'input',
          when: this.toPrompt['author']
        },
        {
          default: this.options.email,
          message: 'What\'s your email?',
          name: 'email',
          store: true,
          type: 'input',
          when: this.toPrompt['email']
        },
        {
          default: this.options.url,
          message: 'What\'s the url for your personal website, Github profile, or some page about you?',
          name: 'url',
          store: true,
          type: 'input',
          when: this.toPrompt['url']
        },
        {
          default: this.options.private,
          message: 'Is your project private?',
          name: 'private',
          store: true,
          type: 'confirm',
          when: this.toPrompt['private']
        },
        {
          default: this.options.keywords,
          message: plural + 'keywords' + fyp + '(Example: keyword1, keyword2)',
          name: 'keywords',
          store: false,
          type: 'input',
          when: this.toPrompt['keywords']
        },
        {
          default: this.options.scripts,
          message: plural + 'scripts' + fyp + '(Example: commands: command1 && comand2, execute: execution1 && execution2)',
          name: 'scripts',
          store: false,
          type: 'input',
          when: this.toPrompt['scripts']
        }, {
          default: this.options.username,
          message: 'What\'s your Github username?',
          name: 'username',
          store: true,
          type: 'input',
          when: this.toPrompt['username']
        }
      ]).then(answers => {
        this.answers = answers;
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
    let name, email, url, license, main, description, priv, homepage, author, keywords, scripts, username, explanation;
    if (this.options.yes) {
      name = this.options.name;
      email = this.options.email;
      url = this.options.url;
      license = this.options.license;
      main = this.options.main;
      description = this.options.description;
      priv = this.options.private;
      homepage = this.options.homepage;
      author = this.options.author;
      keywords = this.options.keywords;
      scripts = this.options.scripts;
      username = this.options.username;
      explanation = this.options.explanation;
    }
    else {
      name = this.toPrompt['name'] ? this.answers.name : this.options.name;
      email = this.toPrompt['email'] ? this.answers.email : this.options.email;
      url = this.toPrompt['url'] ? this.answers.url : this.options.url;
      license = this.toPrompt['license'] ? this.answers.license : this.options.license;
      main = this.toPrompt['main'] ? this.answers.main : this.options.main;
      description = this.toPrompt['description'] ? this.answers.description : this.options.description;
      priv = this.toPrompt['private'] ? this.answers.private : this.options.private;
      homepage = this.toPrompt['homepage'] ? this.answers.homepage : this.options.homepage;
      author = this.toPrompt['author'] ? this.answers.author : this.options.author;
      keywords = this.toPrompt['keywords'] ? this.answers.keywords : this.options.keywords;
      scripts = this.toPrompt['scripts'] ? this.answers.scripts : this.options.scripts;
      username = this.toPrompt['username'] ? this.answers.username : this.options.username;
      explanation = this.toPrompt['explanation'] ? this.answers.explanation : this.options.explanation;
    }
    const opts = {
      name: name,
      email: email,
      website: url,
      license: licenses[license]
    };
    this.composeWith(require.resolve('generator-license'), opts);
    this.config.set({'name': name});
    const pkg = {
      'name': name,
      'version': '0.0.0',
      'description': description,
      'main': main,
      'license': license,
      'private': priv
    };
    this.config.set({'main': main});
    this.config.set({'license': license});
    this.config.set({'private': priv});
    if (homepage.length > 0) {
      pkg['homepage'] = homepage;
    }
    if (author.length > 0 || email.length > 0 || url.length > 0) {
      pkg['author'] = new Object();
    }
    if (author.length > 0) {
      pkg['author']['name'] = author;
      this.config.set({'author': author});
    }
    if (email.length > 0) {
      pkg['author']['email'] = email;
      this.config.set({'email': email});
    }
    if (url.length > 0) {
      pkg['author']['url'] = url;
      this.config.set({'url': url});
    }
    if (keywords.length > 0) {
      const keywordArr = keywords.replace(/ /g, '').split(',');
      pkg['keywords'] = keywordArr;
    }
    if (scripts.length > 0) {
      this.config.set({'scripts': scripts});
      pkg['scripts'] = new Object();
      const scriptArr = scripts.split(',');
      let command;
      for (let q = 0; q < scriptArr.length; q++) {
        command = scriptArr[q].split(':');
        if (command[1].startsWith(' ')) {
          command[1] = command[1].substring(1);
        }
        pkg['scripts'][command[0].replace(/ /g, '')] = command[1];
      }
    }
    this.fs.writeJSON('./package.json', pkg);
    this.config.set({'username': username});
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('./README.md'), {
        name: name,
        desc: description,
        exp: explanation,
        auth: author,
        url: url,
        uname: username
      }
    );

  }

};
