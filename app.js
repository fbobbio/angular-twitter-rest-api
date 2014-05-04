var app = angular.module("angular-twitter", []);

app.controller("AngularTwitterController", function($scope){

	$scope.newHashTag = null;

	$scope.tweets = ["Hola", "Como", "Andas?"];

	$scope.addHashTag = function(hashTag){
		$scope.tweets.push(hashTag);
	}

	$scope.removeHashTag = function(hashTag){
		$scope.tweets.splice($scope.tweets.indexOf(hashTag), 1);
	}


});