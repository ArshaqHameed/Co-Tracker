// $(document).ready(function() {
//     $('.countries_list').select2();
// });

const url = "https://covid19.mathdro.id/api";

var app = angular.module("MyApp", []);

var ctrl = app.controller("MyCtrl", ($scope, $http,$window) => {
    $scope.a = 2;
    $scope.b = 5;

    $scope.title = "Stay Safe, Stay Home";

    // current Date

    $scope.currentDate = new Date();
    // $scope.changeTitle = () =>{
    //     $scope.title = "Beware of Covid-19";
    // };

    // calling the API from now onwards.

    $http.get(url).then((response) => {
        // if the API call is success
        console.log("API calling was success.");
        // console.log(response.data.confirmed.value);

        $scope.all_data = response.data;
        // $scope.confirmed = response.data.confirmed.value;
        // $scope.recovered = response.data.recovered.value;
        // $scope.deaths = response.data.deaths.value;

    }, (error) => {
        // if it is failure.
        console.log("API calling was failure.");
        console.log(error);
    });

    // get country data

    $http.get(`${url}/countries`).then( (response) => {
        $scope.countries = response.data.countries;
    }, (error) => {
        console.log(error);
    });

    $scope.get_country_data = () => {

        var country_name = $scope.country_name;
        if (country_name == '') {
            return;
        }

        $http.get(`${url}/countries/${country_name}`).then((response) => {

            // if api call is success
            console.log($scope.country_name);
            // alert("You are selected country as " + $scope.country_name);
            $scope.country_data = response.data;

        }, (error) => {
            // if api call is failure
            console.log(error);
        });
    };

    
    $scope.downloadImage = function(){
        $window.open(`${url}/og`);
    };
});

function sampleFunction(){
    location.reload();
}
