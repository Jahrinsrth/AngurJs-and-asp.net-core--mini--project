using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyEmloyee.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                    EmployeeId = 1,
                    Name = "kamal",
                    Department = "IT",
                    Email = "abc@gmail.com",
                    DateOfBirth = new DateTime(2000, 04, 24),
                    Address = "colombo",
                    PhoneNumber = "0776547865",
                    Gender = "male",
                    Salary = 55000.00
                }
                );
        }
    }
}
