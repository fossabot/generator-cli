var Generator = require('yeoman-generator');
var writer = require('./writer');
var questions = require('./questions');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
  }

  async prompting() {
    var userQuestions = questions(this);
    this.answers = await this.prompt(userQuestions);
  }

  paths() {
    this.log("Writing to ", this.destinationRoot());
  }

  configuring() {
  }

  default() {
  }

  writing() {
    writer(this, this.answers);
  }

  conflicts() {
  }

  install() {
  }

  end() {
  }
};