-- Insert multiple rows into a Employees table using a single INSERT statement

-- Retrieve and display all rows from the Employees table, including the new data you've inserted

INSERT INTO Employees (EmployeeID, FirstName, LastName, Email, PhoneNumber, HireDate)
VALUES
    (1, 'John', 'Doe', 'john.doe@gmail.com', '555-123-4567', '2024-01-01'),
    (2, 'Jane', 'Smith', 'jane.smith@yahoo.com', '555-124-4568', '2024-02-01'),
    (3, 'Billy', 'Johnson', 'billy.johnson@comcast.com', '555-125-4569', '2024-03-01'),
    (4, 'Miranda', 'Brown', 'miranda.brown@gmail.com', '555-126-4570', '2024-04-01'),
    (5, 'Alex', 'Williams', 'alex.williams@yahoo.com', '555-127-4571', '2024-05-01'),
    (6, 'Tye', 'Hart', 'tye.hart@microsoft.com', '555-128-4572', '2024-06-01'),
    (7, 'Candy', 'Cane', 'candy.cane@yahoo.com', '555-129-4573', '2024-06-01'),
    (8, 'Daaimah', 'Tibrey', 'daaimah.tibrey@gmail.com', '555-120-4501', '2024-03-01');

SELECT * FROM Employees;

