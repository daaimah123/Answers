-- To query data across multiple tables, you can use the JOIN clause 

-- INNER_JOIN clause

SELECT department.ID, department.NAME, employee.Email, employee.City 
FROM department 
JOIN employee ON department.DEPT_ID = employee.DEPT_ID;

-- This query joins the department and employee tables on the DEPT_ID column and selects the ID and NAME from the department table and the Email and City from the employee table


-- LEFT_OUTER_JOIN or LEFT_JOIN

SELECT department.ID, department.NAME, employee.Email, employee.City 
FROM department 
LEFT JOIN employee ON department.DEPT_ID = employee.DEPT_ID;


-- This query uses a LEFT JOIN to return all rows from the department table and the matched rows from the employee table. If there is no match, the result is NULL on the employee side