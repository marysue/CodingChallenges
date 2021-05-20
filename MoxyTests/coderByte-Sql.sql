-- There was a test where I had to join two tables, order by the vendor ID, count the number of times a person appeared in the list, and order by the company name.
-- I had another SQL test that included all of these functions - so this wasn't a challenge.  But I forgot to record it.

-- This had everything I needed to reference:

-- SELECT department.dept_id AS "Department ID", SUM(employee.salary) AS "Salaries", COUNT(employee.emp_id) As "Nbr Employees"
-- FROM department
-- JOIN employee
--    ON department.dept_id = employee.dept_id
-- GROUP BY
--     department.dept_id
-- ORDER BY
--     department.dept_id
