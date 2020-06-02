var app = angular.module('myApp',[]);
app.controller('educationController', function($scope,$http){
  $scope.studentData = function(education){
  	$http({
  		method : 'POST',
  		url : 'educationData',
  		data : $scope.education
  	}).then(function success(response){
      $scope.education = {}
  	}, function error(response){
      alert('Error');
  	})
  }
});