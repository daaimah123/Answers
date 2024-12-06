-- Sort the results by department name, you can modify the query to include an ORDER BY clause that specifies the NAME column from the department table - this will sort the results based on the department names in ascending order

SELECT e.Email, d.NAME AS DepartmentName
FROM employee e
JOIN department d ON e.DEPT_ID = d.DEPT_ID
WHERE d.SALARY >= 70000
ORDER BY d.NAME ASC;
