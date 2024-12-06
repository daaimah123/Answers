-- Modify the query to include the department name in the results as well, you can adjust the SELECT statement to include the department name from the department table

SELECT e.Email, d.NAME AS DepartmentName
FROM employee e
JOIN department d ON e.DEPT_ID = d.DEPT_ID
WHERE d.SALARY >= 70000;
