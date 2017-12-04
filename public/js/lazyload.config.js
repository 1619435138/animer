(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
			 	{
			 		name: 'start',
			 		files: [
			 			'./template/start/startController.js',
			 			'./template/start/start.css',
			 			'./template/start/start.js',
			 		]
			 	},
			 	{
			 		name: 'home',
			 		files: [
			 			'./template/home/homeController.js',
			 			'./template/home/home.css',
			 		]
			 	},
			 	{
			 		name: 'index',
			 		files: [
			 			'./template/index/indexController.js',
			 			'./template/index/index.css',
			 		]
			 	},
			 	{
			 		name: 'classify',
			 		files: [
			 			'./template/classify/classifyController.js',
			 			'./template/classify/classify.css',
			 		]
			 	},
			 	{
			 		name: 'personal',
			 		files: [
			 			'./template/personal/personalController.js',
			 			'./template/personal/personal.css',
			 		]
			 	},
			 	{
			 		name: 'classifyList',
			 		files: [
			 			'./template/classifyList/classifyListController.js',
			 			'./template/classifyList/classifyList.css',
			 		]
			 	},
			 	{
			 		name: 'videoPage',
			 		files: [
			 			'./template/videoPage/videoPageController.js',
			 			'./template/videoPage/videoPage.css',
			 		]
			 	},
			 	{
			 		name: 'readingPage',
			 		files: [
			 			'./template/readingPage/readingPageController.js',
			 			'./template/readingPage/readingPage.css',
			 		]
			 	},
			 	{
			 		name: 'collectPage',
			 		files: [
			 			'./template/collectPage/collectPageController.js',
			 			'./template/collectPage/collectPage.css',
			 		]
			 	},
			 	{
			 		name: 'watchHistory',
			 		files: [
			 			'./template/watchHistory/watchHistoryController.js',
			 			'./template/watchHistory/watchHistory.css',
			 		]
			 	},
			 	{
			 		name: 'myPrize',
			 		files: [
			 			'./template/myPrize/myPrizeController.js',
			 			'./template/myPrize/myPrize.css',
			 		]
			 	},
			 	
	 		]
	 		
 		});
	}]);
	
})();