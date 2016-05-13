import * as angular from 'angular';
import * as uirouter from 'angular-ui-router';
import { Test } from './test';
import { myDir } from './directive';
import { Home } from './components/home';

function runFn() {
    Test.run();
}

function configure($stateProvider: ng.ui.IStateProvider) {
    Home.configure($stateProvider);
}

angular.module('app',[
    <string> uirouter
])
    .run(runFn)
    .config(configure)
    .directive('mydir', myDir);