const URL = "http://localhost:1426/stevens/api/v1/1/courses";
let app = angular.module('StevensMilee',[])

app.controller('MyCtrl',($scope, $http)=>{
//this is controller
console.log("App loaded");
//Calling API
$http.get(URL).then((response)=>{
//case of success

console.log("Inside success response");
console.log(response.data);
//making a variable to bind to the scope

$scope.all_data = response.data;


},(error)=>{
//case of failure
console.log(error);

})

});