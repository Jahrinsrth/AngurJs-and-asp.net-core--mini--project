using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyEmloyee.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeContext _employeeContext;

        public EmployeeRepository(EmployeeContext context)
        {
            _employeeContext = context;
        }
        public void Add(Employee employee)
        {
            _employeeContext.Employees.Add(employee);
            _employeeContext.SaveChanges();
        }

        public void Delete(Employee employee)
        {
            _employeeContext.Employees.Remove(employee);
            _employeeContext.SaveChanges();
        }

        public Employee Get(int id)
        {
            return _employeeContext.Employees.FirstOrDefault(e => e.EmployeeId == id);
        }

        public IEnumerable<Employee> GetAll()
        {
            return _employeeContext.Employees.ToList();
        }

        public void Update(Employee Dbemployee, Employee employee)
        {
            Dbemployee.Name = employee.Name;
            Dbemployee.Department = employee.Department;
            Dbemployee.Email = employee.Email;
            Dbemployee.DateOfBirth = employee.DateOfBirth;
            Dbemployee.Address = employee.Address;
            Dbemployee.PhoneNumber = employee.PhoneNumber;
            Dbemployee.Gender = employee.Gender;
            Dbemployee.Salary = employee.Salary;

            _employeeContext.SaveChanges();

        }
    }
}
