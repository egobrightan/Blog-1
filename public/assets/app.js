
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


'use strict';

blogControllers.controller('homeController', ["$scope",
    function ($scope) {

    }
]);
'use strict';

blogControllers.controller('headerController', ["$scope",
    function ($scope) {
        $scope.title = "Whassaaaappp";
    }
]);
'use strict';

blogControllers.controller("sideMenuController", ["$scope", 
    function ($scope) {
        
    }
]);
'use strict';


blogModels.factory("User", ["BaseEntity",
    function (BaseEntity) {
        function User (data) {
            BaseEntity.constructor.call(this, data);

            this.add("firstName",   "string");
            this.add("lastName",    "string");
            this.add("username",    "string");
            this.add("email",       "string");
            this.add("salt",        "string");
            this.add("password",    "string");
            this.add("roles",       "string", {enumerable: true});
        }

        BaseEntity.apply(User);

        return User;
    }
]);
'use strict';

blogModels.factory("UserRepository", ["BaseRepository", "User",
    function (BaseRepository, User) {
        function UserRepository(data) {
            BaseRepository.constructor.call(this, User, data);

            this.setApiURL('api/user')
        }

        BaseRepository.apply(UserRepository);


        return new UserRepository();
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImJ1bmRsZXMvaG9tZS9jb250cm9sbGVycy9ob21lQ29udHJvbGxlci5qcyIsImJ1bmRsZXMvbGF5b3V0L2NvbnRyb2xsZXJzL2hlYWRlckNvbnRyb2xsZXIuanMiLCJidW5kbGVzL2xheW91dC9jb250cm9sbGVycy9zaWRlTWVudUNvbnRyb2xsZXIuanMiLCJidW5kbGVzL3VzZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsImJ1bmRsZXMvdXNlci9tb2RlbHMvVXNlclJlcG9zaXRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgYmxvZ0NvbnRyb2xsZXJzID0gYW5ndWxhci5tb2R1bGUoJ2Jsb2dDb250cm9sbGVycycsIFtdKTtcbnZhciBibG9nU2VydmljZXMgPSBhbmd1bGFyLm1vZHVsZSgnYmxvZ1NlcnZpY2VzJywgW10pO1xudmFyIGJsb2dEaXJlY3RpdmVzID0gYW5ndWxhci5tb2R1bGUoJ2Jsb2dEaXJlY3RpdmVzJywgW10pO1xudmFyIGJsb2dGaWx0ZXJzID0gYW5ndWxhci5tb2R1bGUoJ2Jsb2dGaWx0ZXJzJywgW10pO1xudmFyIGJsb2dNb2RlbHMgPSBhbmd1bGFyLm1vZHVsZSgnYmxvZ01vZGVscycsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoXCJibG9nXCIsIFsnYmxvZ0NvbnRyb2xsZXJzJywgJ2Jsb2dTZXJ2aWNlcycsICdibG9nRGlyZWN0aXZlcycsICdibG9nRmlsdGVycycsICdibG9nTW9kZWxzJyxcbiAgICAndWkucm91dGVyJywgJ25nTWF0ZXJpYWwnLCAncGVyc2lzdGVuY2VKYXInXSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvXCIpO1xuICAgIFxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncHVibGljJywge1xuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAnc2lkZWJhckAnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYmxvZy9wdWJsaWMvYXBwL2J1bmRsZXMvbGF5b3V0L3ZpZXdzL3NpZGViYXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdzaWRlTWVudUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnaGVhZGVyQCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdibG9nL3B1YmxpYy9hcHAvYnVuZGxlcy9sYXlvdXQvdmlld3MvaGVhZGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnaGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXRlKCdwdWJsaWMuaG9tZScsIHtcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAnbWFpbkAnOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGVtcGxhdGVVcmw6ICdibG9nL3B1YmxpYy9hcHAvYnVuZGxlcy9ob21lL3ZpZXdzL2hvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmJsb2dDb250cm9sbGVycy5jb250cm9sbGVyKCdob21lQ29udHJvbGxlcicsIFtcIiRzY29wZVwiLFxuICAgIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgIH1cbl0pOyIsIid1c2Ugc3RyaWN0JztcblxuYmxvZ0NvbnRyb2xsZXJzLmNvbnRyb2xsZXIoJ2hlYWRlckNvbnRyb2xsZXInLCBbXCIkc2NvcGVcIixcbiAgICBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS50aXRsZSA9IFwiV2hhc3NhYWFhcHBwXCI7XG4gICAgfVxuXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5ibG9nQ29udHJvbGxlcnMuY29udHJvbGxlcihcInNpZGVNZW51Q29udHJvbGxlclwiLCBbXCIkc2NvcGVcIiwgXG4gICAgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICBcbiAgICB9XG5dKTsiLCIndXNlIHN0cmljdCc7XG5cblxuYmxvZ01vZGVscy5mYWN0b3J5KFwiVXNlclwiLCBbXCJCYXNlRW50aXR5XCIsXG4gICAgZnVuY3Rpb24gKEJhc2VFbnRpdHkpIHtcbiAgICAgICAgZnVuY3Rpb24gVXNlciAoZGF0YSkge1xuICAgICAgICAgICAgQmFzZUVudGl0eS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZChcImZpcnN0TmFtZVwiLCAgIFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgdGhpcy5hZGQoXCJsYXN0TmFtZVwiLCAgICBcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuYWRkKFwidXNlcm5hbWVcIiwgICAgXCJzdHJpbmdcIik7XG4gICAgICAgICAgICB0aGlzLmFkZChcImVtYWlsXCIsICAgICAgIFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgdGhpcy5hZGQoXCJzYWx0XCIsICAgICAgICBcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuYWRkKFwicGFzc3dvcmRcIiwgICAgXCJzdHJpbmdcIik7XG4gICAgICAgICAgICB0aGlzLmFkZChcInJvbGVzXCIsICAgICAgIFwic3RyaW5nXCIsIHtlbnVtZXJhYmxlOiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICBCYXNlRW50aXR5LmFwcGx5KFVzZXIpO1xuXG4gICAgICAgIHJldHVybiBVc2VyO1xuICAgIH1cbl0pOyIsIid1c2Ugc3RyaWN0JztcblxuYmxvZ01vZGVscy5mYWN0b3J5KFwiVXNlclJlcG9zaXRvcnlcIiwgW1wiQmFzZVJlcG9zaXRvcnlcIiwgXCJVc2VyXCIsXG4gICAgZnVuY3Rpb24gKEJhc2VSZXBvc2l0b3J5LCBVc2VyKSB7XG4gICAgICAgIGZ1bmN0aW9uIFVzZXJSZXBvc2l0b3J5KGRhdGEpIHtcbiAgICAgICAgICAgIEJhc2VSZXBvc2l0b3J5LmNvbnN0cnVjdG9yLmNhbGwodGhpcywgVXNlciwgZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0QXBpVVJMKCdhcGkvdXNlcicpXG4gICAgICAgIH1cblxuICAgICAgICBCYXNlUmVwb3NpdG9yeS5hcHBseShVc2VyUmVwb3NpdG9yeSk7XG5cblxuICAgICAgICByZXR1cm4gbmV3IFVzZXJSZXBvc2l0b3J5KCk7XG4gICAgfVxuXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9