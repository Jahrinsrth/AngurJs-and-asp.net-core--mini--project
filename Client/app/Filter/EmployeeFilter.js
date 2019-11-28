app.filter("employeeAgeFilter", function () {

    function calculateAge(birthday) {
        var ageDifMs = Date.now() - Date.parse(birthday);
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function (birthdate) {
        return calculateAge(birthdate);
    };


}).filter("startPagination",function(){
    return function(data,start){
         return data.slice(start);
    }
})

