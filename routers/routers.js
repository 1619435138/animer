angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/start');
		$stateProvider
			.state('start', {
				url: '/start',
				templateUrl: './template/start/start.html',
				controller: 'startController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('start')
					}]
				}
			})
			.state('home', {
				url: '/',
				templateUrl: './template/home/home.html',
				controller: 'homeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('home')
					}]
				}
			})
			.state('home.index', {
				url: 'home/index',
				templateUrl: './template/index/index.html',
				controller: 'indexController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('index')
					}]
				}
			})
			.state('home.classify', {
				url: 'home/classify',
				templateUrl: './template/classify/classify.html',
				controller: 'classifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify')
					}]
				}
			})
			.state('home.personal', {
				url: 'home/personal',
				templateUrl: './template/personal/personal.html',
				controller: 'personalController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personal')
					}]
				}
			})
			.state('home.classifyList', {
				url: 'home/classifyList',
				templateUrl: './template/classifyList/classifyList.html',
				controller: 'classifyListController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classifyList')
					}]
				}
			})
			.state('home.videoPage', {
				url: 'home/videoPage',
				templateUrl: './template/videoPage/videoPage.html',
				controller: 'videoPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('videoPage')
					}]
				}
			})
			.state('readingPage', {
				url: '/readingPage',
				templateUrl: './template/readingPage/readingPage.html',
				controller: 'readingPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('readingPage')
					}]
				}
			})
			.state('home.collectPage', {
				url: 'home/collectPage',
				templateUrl: './template/collectPage/collectPage.html',
				controller: 'collectPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('collectPage')
					}]
				}
			})
			.state('home.watchHistory', {
				url: 'home/watchHistory',
				templateUrl: './template/watchHistory/watchHistory.html',
				controller: 'watchHistoryController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('watchHistory')
					}]
				}
			})
			.state('home.myPrize', {
				url: 'home/myPrize',
				templateUrl: './template/myPrize/myPrize.html',
				controller: 'myPrizeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('myPrize')
					}]
				}
			})


	}])