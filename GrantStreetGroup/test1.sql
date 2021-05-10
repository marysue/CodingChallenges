
-- You are given two tables, department and employee, with the following structure:
-- create table department (
--   dept_id integer not null,
--   dept_name varchar(30) not null,
--   dept_location varchar(930) not null,
--   unique(dept_id)
--   );

--  create table employee (
--    emp_id integer not null,
--    emp_name varchar(50) not null,
--    dept_id integer not null,
--    salary integer not null,
--    unique(emp_id)
--    );

-- The following are contents of the tables:
-- create table department (
--   dept_id integer not null,
--   dept_name varchar(30) not null,
--   dept_location varchar(930) not null,
--   unique(dept_id)
--   );

--  create table employee (
--    emp_id integer not null,
--    emp_name varchar(50) not null,
--    dept_id integer not null,
--    salary integer not null,
--    unique(emp_id)
--    );

-- insert into department values(10, 'Accounts', 'Delhi');
-- insert into department values(20, 'Marketing', 'Delhi');
-- insert into department values(40, 'IT', 'Warsaw');
-- insert into department values(30, 'Production', 'Hyderabad');
-- insert into department values(50, 'Sales', 'Bengaluru');
-- insert into employee values(1, 'Jojo', 20, 5000);
-- insert into employee values(2, 'Popat Lal', 30, 15000);
-- insert into employee values(3, 'Santa Singh', 40, 25000);
-- insert into employee values(4, 'Banta Singh', 20, 7500);
-- insert into employee values(5, 'Sohan Lal', 20, 15000);
-- insert into employee values(6, 'Kk', 10, 12000);
-- insert into employee values(7, 'Bob', 20, 35000);
-- insert into employee values(8, 'John', 30, 25000);
-- insert into employee values(9, 'Smith', 40, 5000);

-- Each record in the table department represents a department which might hire
-- some employees. Each record in the table employee represents an employee who
-- works for one of the departments from the table department. The salary of each
-- employee is known. (However, the locations of the departments are not relevant
-- here.)

-- Write a SQL query that returns a table comprising all the departments (dept_id) in
-- the table department that hires at least one employee, the number of people they
-- employ and the sum of salaries in each department. The table should be ordered by
-- dept_id (in increasing order).

-- For example, for:

--     department:

--     dept_id     dept_name           dept_location
--     ----------------------------------------------
--     10      |   Accounts        |   Delhi
--     20      |   Marketing       |   Delhi
--     40      |   IT              |   Warsaw
--     30      |   Production      |   Hyderabad
--     50      |   Sales           |   Bengaluru

--     employee:

--     emp_id  emp_name           dept_id  salary
--     ---------------------------------------------
--     1      |    Jojo        |   20      | 5000
--     2      |    Popat Lal   |   30      | 15000
--     3      |    Santa Singh |   40      | 25000
--     4      |    Banta Singh |   20      | 7500
--     5      |    Sohan Lal   |   20      | 15000
--     6      |    Kk          |   10      | 12000
--     7      |    Bob         |   20      | 35000
--     8      |    John        |   30      | 25000
--     9      |    Smith       |   40      | 5000

--     your query should return

--     dept_id      count        sum_of_salary
--     ----------------------------------------
--     10             1           12000
--     20             4           62500
--     30             2           40000
--     40             2           30000
SELECT department.dept_id AS "Department ID", SUM(employee.salary) AS "Salaries", COUNT(employee.emp_id) As "Nbr Employees"
FROM department
JOIN employee
   ON department.dept_id = employee.dept_id
GROUP BY
    department.dept_id
ORDER BY
    department.dept_id
