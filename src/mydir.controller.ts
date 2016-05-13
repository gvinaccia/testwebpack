export class MyDirController {
    public ticks : number = 0;
    constructor($interval: ng.IIntervalService) {
        $interval(() => {
            this.ticks++;
        }, 1000)
    }
}