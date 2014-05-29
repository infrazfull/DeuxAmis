'use strict';

var app = angular.module('deuxamisApp', ['ngRoute','ngAnimate','pascalprecht.translate','angular-carousel']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {templateUrl: 'partials/default.html',controller: 'defaultPageCtrl'})
    .when('/chiefs', {templateUrl: 'partials/chiefs.html', controller: 'ChiefsCtrl'})
    .when('/suggestions', {templateUrl: 'partials/suggestions.html', controller: 'SuggestionCtrl'})
    .when('/creations', {templateUrl: 'partials/creations.html', controller: 'CreationsCtrl'})
    .when('/contact', {templateUrl: 'partials/contact.html'})
    .when('/philosophy',{templateUrl: 'partials/philosophy.html'})
    .otherwise({redirectTo: '/'});
  }
);

app.config(function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    'prefix': '/lang/catalog_',
    'suffix': '.json'
  });
  $translateProvider.preferredLanguage('fr');
});