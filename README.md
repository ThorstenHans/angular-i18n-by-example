# angular-i18n-by-example

This repository contains a small sample application for demonstrating different i18n solutions. Besides regular angular framework i18n functionalities, For each different solution a corresponding branch will be generated in the future.

## Branches
* `master` contains the application without any i18n support
* `fx` contains i18n implementation based on angular functionalities
* `ng-translate` contains i18n implementation based on `ng-translate`
* `custom` contains i18n implementation based on custom logic

## Getting started
Once you’ve downloaded or cloned the project to your system, third party dependencies like angular itself need to be installed in the scope of the project.  Follow these steps to install all dependencies

```
$ cd project-directory
$ npm install
```

### Running the application
You can start the application using `npm start` from the project directory. 
### In Memory Storage
All data is only persisted in memory. All services contain arrays with `JSON` data. 
