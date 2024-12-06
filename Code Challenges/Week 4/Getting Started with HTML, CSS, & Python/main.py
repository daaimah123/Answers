# Project Structure:
# 1. Create a new directory for your project
# 2. Inside the project folder, create the following files:
#    - main.py
#    - styles.css
#    - templates/index.html

# Task 1: Create a basic HTML template
# In index.html, add a simple structure with a header, main content area, and footer.

# Task 2: Add some basic styling
# In styles.css, define CSS rules to style your HTML elements.

# Task 3: Implement the main functionality
# In main.py, create a simple Python script that reads and writes files.

# Bonus: Implement a simple form submission
# Allow users to input their name and display it on the page.

# Example input:
# Your project structure should look like this:
# project_folder/
#   ├── main.py
#   ├── styles.css
#   └── templates/
#       └── index.html


import os

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except FileNotFoundError:
        return "File not found."

def write_file(file_path, content):
    try:
        with open(file_path, 'w') as file:
            file.write(content)
        return "File created successfully."
    except IOError:
        return "Failed to create file."

def main():
    # Read content from index.html
    html_content = read_file('templates/index.html')
    
    # Write content back to index.html
    write_file('templates/index.html', html_content)
    
    print("Content has been read from and written back to index.html")

# do not remove lines of code below
if __name__ == "__main__":
    main()