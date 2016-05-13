import { MyDirController } from './mydir.controller.ts';

export function myDir() : ng.IDirective {
    return {
        restrict: 'E',
        template: `<p>la mia direttiva <span ng-bind="mydirCtrl.ticks"></span></p>`,
        controller: MyDirController,
        controllerAs: 'mydirCtrl'
    }
}