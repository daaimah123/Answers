-- Fnd all employee emails in the employee and department tables where the salary is 70000 or more, you can use a SQL query that involves a JOIN operation between the two tables

SELECT e.Email
FROM employee e
JOIN department d ON e.DEPT_ID = d.DEPT_ID
WHERE d.SALARY >= 70000;
