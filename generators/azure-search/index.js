var Generator = require('yeoman-generator');
var writer = require('./writer');
var questions = require('./questions');
var config = require('../../common/config');
var resources = require('../../common/resources');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.configName = "azure-search";
  }

  initializing() {
  }

  async prompting() {
    var userQuestions = questions(this);
    this.answers = await this.prompt(userQuestions);
    resources.push("azurerm_search_service", `azurerm_search_service.${this.answers.name}`);
  }

  paths() {
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
    cleanupSecrets(this.answers);    
    config.set(this, this.configName, this.answers);
    config.save(this);
  }  
};

function cleanupSecrets(answers) {
  
}
