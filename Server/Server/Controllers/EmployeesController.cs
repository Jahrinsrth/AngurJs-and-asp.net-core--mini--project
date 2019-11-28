using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyEmloyee.Models;

namespace MyEmloyee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private IEmployeeRepository _employeeRepository;

        public EmployeesController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        // GET: api/Employees
        [HttpGet]
        public  IActionResult GetEmployees()
        {
            IEnumerable<Employee> employees = _employeeRepository.GetAll();
            return Ok(employees);
        }

        // GET: api/Employees/5
        [HttpGet("{id}", Name ="Get")]
        public IActionResult GetEmployee(int id)
        {
            Employee employee = _employeeRepository.Get(id);

            if (employee == null)
            {
                return NotFound("Employee could not be found");
            }

            return Ok(employee);
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public IActionResult PutEmployee(int id, [FromBody] Employee employee)
        {
            if (employee == null) {
                return BadRequest();
            }

            Employee empChanges = _employeeRepository.Get(id);
            if (empChanges == null) {
                return NotFound();
            }

            _employeeRepository.Update(empChanges,employee);
            return NoContent();
        }

        // POST: api/Employees
        [HttpPost]
        public IActionResult PostEmployee([FromBody] Employee employee)
        {
            if (employee == null) {
                return BadRequest();
            }
            _employeeRepository.Add(employee);
            return NoContent();
            

        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public IActionResult  DeleteEmployee(int id)
        {
            Employee employee = _employeeRepository.Get(id);
            if (employee == null) {
                return NotFound();
            }
            _employeeRepository.Delete(employee);
            return NoContent();
        }

    }
}
