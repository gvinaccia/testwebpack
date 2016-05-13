export class Home {
    static configure($provider: ng.ui.IStateProvider) {
        $provider.state({
            name: 'home',
            url: '/',
            template: `<section><h1>Homepage</h1><mydir></mydir></section>`,
            controller: HomeController
        });
    }
}

class HomeController {
    constructor($http: ng.IHttpService) {
        $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then((response) => {
                console.dir(response.data);
            });
    }
}