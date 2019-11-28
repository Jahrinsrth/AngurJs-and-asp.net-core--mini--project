var app = angular.module("myapp", ['ngRoute', 'ui.bootstrap']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
        .when("/EmployeeMainView", {
            templateUrl: "/app/views/EmployeeMainView.html",
            controller: "employeeController"
        })
        .when("/EmployeeListView", {
            templateUrl: "/app/views/EmployeeListView.html",
            controller: "employeeController"
        })
        .when("/AddEmployee", {
            mytext: "hel",
            templateUrl: "/app/views/AddEmployee.html",
            controller: "employeeController"

        })
        .when("/EmployeeDetailView/:empId", {
            templateUrl: "/app/views/EmployeeDetailView.html",
            controller: "employeeController"
        })
        .when("/EditEmployee/:empId", {
            templateUrl: "/app/views/AddEmployee.html",
            controller: "employeeController"
        })
        //  .when("/DeleteEmployee/:empId",{
        //     templateUrl: "/app/views/DeleteEmployee.html",
        //     controller : "employeeController"
        //  })
        .otherwise({
            controller: "employeeController"
        })


}]);

app.directive("decimals", function () {
    return {
        restrict: "A",
        require: "?ngModel",
        scope: {

        },
        link: function (scope, element, attrs, ngModel) {

            element.on("change", function (e) {
                var floatValue = parseFloat(element.val());
                if (!isNaN(floatValue)) {

                    var intValue = floatValue.toFixed(2);
                    element.val(intValue);
                    ngModel.$setViewValue(intValue);
                    ngModel.$render();
                }
            });

        }
    }
});

app.directive('ngConfirmClick', [
    function () {
        return {
            priority: 1,
            terminal: true,
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.ngClick;
                element.bind('click', function (event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }])





