let app = angular.module('app', [])

app.controller('myCtrl', function($scope, $http){
    $scope.list

    $http.get('http://localhost:3000/libraries')
    .success(res=>{
        console.log(res);
        $scope.libraries = res
    })
})

app.controller('directivaWithoutScope', function(){})