
var blogControllers = angular.module('blogControllers', []);
var blogServices = angular.module('blogServices', []);
var blogDirectives = angular.module('blogDirectives', []);
var blogFilters = angular.module('blogFilters', []);
var blogModels = angular.module('blogModels', []);

angular.module("blog", ['blogControllers', 'blogServices', 'blogDirectives', 'blogFilters', 'blogModels',
    'ui.router', 'ngMaterial', 'persistenceJar'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    
        $stateProvider.state('public', {
            url: '',
            abstract: true,
            views: {
                'sidebar@': {
                    templateUrl: 'blog/public/app/bundles/layout/views/sidebar.html',
                    controller: 'sideMenuController'
                },
                'header@': {
                    templateUrl: 'blog/public/app/bundles/layout/views/header.html',
                    controller: 'headerController'
                }
            }
        }).state('public.home', {
            url: '/',
            views: {
                'main@': {
                    //templateUrl: 'blog/public/app/bundles/home/views/home.html',
                    controller: 'homeController'
                }
            }
        });
    });

