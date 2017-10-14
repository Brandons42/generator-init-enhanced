# generator-init-enhanced [![NPM version][npm-image]][npm-url]
> An easily composable Yeoman generator for quickly generating a license, README, and package.json that suits your needs

## Installation

First, install [Yeoman](http://yeoman.io) and generator-init-enhanced using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-init-enhanced
```

Then generate your new project:

```bash
yo init-enhanced
```

## Usage in Your Own Project

Simply answer all of the prompts after typing in the command above, and you're good to go! generator-init-enhanced will even remember what you answered last time! If you'd like to stick to the defaults and skip all prompts, simply generate with the --yes or --y flag:

```bash
yo init-enhanced --y
```

> Note: I'd recommend not using the --yes/--y flag the first time you generate, so that you can enter all of your personal information once and have it filled out automatically for you in the future

## Usage in Your Generator

There are two ways you can use this generator within yours. You can supply your own information, or you can allow it to do the work for you. Here's an example of supplying your own information:

```javascript
this.composeWith(require.resolve('generator-init-enhanced'), {
  name: 'your-project-name', //default: this.appname
  description: 'Your brief project description', //default: An awesome project
  explanation: 'Your longer and more detailed project explanation', //default: [your-project-name] is an awesome project that does awesome things
  homepage: 'Url to the project homepage', //no default
  license: 'The license you would like for your project', //default: MIT
  author: 'The name of the user', //no default
  email: 'The email of the user', //no default
  url: 'A url to a website or profile of the user', //no default
  main: 'The entry point file', //default: index.js
  keywords: 'keyword1, keyword2, keyword3', //no default
  scripts: 'commands: command1 && command2, command: other-longer-command', //no default
  private: Boolean, //default: false
  username: 'The Github username of the user',
  prompt: 'name, description, explanation', //default: prompt everything
  prompt: 'xname, description, explanation' //a leading 'x' denotes that you would like to prompt everything except the list that follows
});
```

>Note: generator-init-enhanced will remember users' past preferences and change defaults accordingly for fields like author and email that will likely remain the same across projects; consequently, even though it says above that there's no default for the author field, there will be a default if the user has used this generator before

>Note: All fields are optional, yet recommended

You can also just let generator-init-enhanced do the work and prompt for you! It will remember user preferences. Here's an example:

```javascript
this.composeWith(require.resolve('generator-init-enhanced'));
```

There's also an easy way to imitate npm/yarn init --y/yes, in which all defaults are used and prompting is skipped. Here's an example:

```javascript
this.composeWith(require.resolve('generator-init-enhanced'), {
  yes: true
});
```

Licenses you can choose
  * Apache 2.0
  * BSD 2-Clause (FreeBSD) License
  * BSD 3-Clause (NewBSD) License
  * GNU AGPL 3.0
  * GNU GPL 3.0
  * GNU LGPL 3.0
  * Internet Systems Consortium (ISC) License
  * MIT
  * Mozilla Public License 2.0
  * No License (Copyrighted)
  * Unlicense

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

 © Brandon Suen

[Brandon Suen]: (https://brandons42.github.io/personal_website/)
[npm-image]: https://badge.fury.io/js/generator-init-enhanced.svg
[npm-url]: https://npmjs.org/package/generator-init-enhanced
[travis-image]: https://travis-ci.org/brandons42/generator-init-enhanced.svg?branch=master
[travis-url]: https://travis-ci.org/brandons42/generator-init-enhanced
[daviddm-image]: https://david-dm.org/brandons42/generator-init-enhanced.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/brandons42/generator-init-enhanced
