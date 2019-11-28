using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyEmloyee.Models
{
   public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetAll();
        Employee Get(int id);
        void Add(Employee employee);
        void Update(Employee Dbemployee,Employee employee);
        void Delete(Employee employee);
    }
}
