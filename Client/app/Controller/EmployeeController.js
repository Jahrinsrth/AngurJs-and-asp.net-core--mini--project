app.controller("employeeController", function ($scope, $location, $routeParams, $route, employeeService) {

    $scope.pageSize = 5;
    $scope.currentPage = 1;

    // getting data of all employee
    employeeService.getAllEmployee().then(response => {
        console.log(response.data);

        $scope.employees = [];
        // $scope.employees;

        var employeeList = response.data;

        employeeList.forEach(emp => {
            let empNew = {
                employeeId: emp.employeeId,
                name: emp.name,
                department: emp.department,
                email: emp.email,
                dateOfBirth: emp.dateOfBirth,
                address: emp.address,
                phoneNumber: emp.phoneNumber,
                gender: emp.gender,
                salary: emp.salary
                // age:emp.dateOfBirth.getFullYear()
            }

            // console.log(name[0])
            $scope.employees.push(empNew);
            // console.log(emp.email);

        });
    });

    //Add new employee
    $scope.addEmployee = function () {

        var employee = {
            name: $scope.name,
            department: $scope.department,
            email: $scope.email,
            dateOfBirth: $scope.dateOfBirth,
            address: $scope.address,
            phoneNumber: $scope.phoneNumber,
            gender: $scope.gender,
            salary: $scope.salary

        };

        employeeService.addEmployee(employee).then(response => {
            console.log("added successfully");
            // alert("employee addes successfully")
            $location.path("/EmployeeListView");
        });

    };

    // fetch the employee Id from the url 
    if ($routeParams.empId) {
        $scope.id = $routeParams.empId;
        console.log($scope.id);
    }

    //Add and update take place in same html
    if ($scope.id > 0) {
        $scope.idEdit = $scope.id;
    }


    // getting data of a single employee
    employeeService.getEmployee($scope.id).then(response => {
        $scope.employeeId = response.data.employeeId,
            $scope.name = response.data.name,
            $scope.department = response.data.department,
            $scope.email = response.data.email,
            $scope.dateOfBirth = response.data.dateOfBirth,
            $scope.address = response.data.address,
            $scope.phoneNumber = parseInt(response.data.phoneNumber),
            $scope.gender = response.data.gender,
            $scope.salary = response.data.salary
    });

    //update employee
    $scope.updateEmployee = () => {

        var employeeUpdate = {
            employeeId: $scope.id,
            name: $scope.name,
            department: $scope.department,
            email: $scope.email,
            dateOfBirth: $scope.dateOfBirth,     //.getFullYear(),
            address: $scope.address,
            phoneNumber: $scope.phoneNumber,
            gender: $scope.gender,
            salary: $scope.salary

        };

        employeeService.updateEmployee($scope.id, employeeUpdate).then(response => {
            console.log("success");
            alert("updated  employee " + employeeUpdate.name + " successfully");
            $location.path("/EmployeeListView");
        });
    };

    //delete employeee
    $scope.deleteEmployee = (id) => {

        employeeService.deleteEmployee(id).then(response => {
            console.log("deleted successful");
            $location.path("/EmployeeListView");
        })

    };

    //check the email for duplication 
    $scope.duplicateEmail = () => {

        employeeService.getAllEmployee().then(response => {

            let arraylist = response.data;

            let emailArray = [];

            console.log(arraylist[0].email);


            for (let i = 0; i < arraylist.length; i++) {
                //console.log(arraylist[i].email) 
                emailArray.push(arraylist[i].email);
            }

            //   console.log(emailArray);

            let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
            console.log(findDuplicates(emailArray));

            if (findDuplicates(emailArray).length == 0) {

                console.log("not found")
                // alert("No duplicate emails found");

                toastr.success("No duplicate emails found");
            } else {
                //alert("duplicate email address found " + findDuplicates(emailArray));
                toastr.error("duplicate email address found " + findDuplicates(emailArray));

            }
        })
    };
});

