using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyEmloyee.Migrations
{
    public partial class adding1stdata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "EmployeeId", "Address", "DateOfBirth", "Department", "Email", "Gender", "Name", "PhoneNumber", "Salary" },
                values: new object[] { 1, "colombo", new DateTime(2000, 4, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "IT", "abc@gmail.com", "male", "kamal", "0776547865", 55000.0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1);
        }
    }
}
