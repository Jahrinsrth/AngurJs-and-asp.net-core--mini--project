app.service("employeeService", function ($http) {

    var url = "http://localhost:5000/api/Employees";

    this.getAllEmployee = function () {
        return $http.get(url);
    };

    this.getEmployee = function (empId) {
        return $http.get(url + '/' + empId)
    };

    this.addEmployee = function (employee) {
        return $http.post(url, employee)
    };

    this.updateEmployee = function (empId, employee) {
        return $http.put(url + '/' + empId, employee);
    };

    this.deleteEmployee = function (empId) {
        return $http.delete(url + '/' + empId)
    };

});