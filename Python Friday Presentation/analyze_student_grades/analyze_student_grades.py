# You are tasked with creating a program that reads student grades from a CSV file and performs some basic analysis on the data. Here's what you need to do:

# Read a CSV file containing student grades for different subjects. The CSV file should have columns for 'Name', 'Math Grade', 'Science Grade', and 'English Grade'.
    # Use Python's built-in csv module or the popular pandas library to read the CSV file.
    # Calculate the average grade for each subject across all students.
    # Find the student(s) with the highest overall grade (average of all three subjects).
    # Determine which subject has the highest average grade overall.
    # Create a simple report that summarizes these findings.
    # Use Python's string formatting capabilities to present the results in a readable format.

# Key Points to Consider:
    # Make sure to handle potential errors when reading the CSV file (e.g., missing files, incorrect data types).
    # Use appropriate data structures like lists or dictionaries to store student information.
    # Implement basic arithmetic operations to calculate averages.
    # Utilize Python's built-in functions like max() and min() where applicable.
    # Format your output to make it easy to read and understand.

# CSV Data Structure with Four Columns
# Name: The student's name
# Maths Grade: The grade achieved in Maths (assuming a grading scale similar to UK GCSEs)
# Science Grade: The grade achieved in Science
# English Grade: The grade achieved in English

    # Name,Maths Grade,Science Grade,English Grade
    # Alice,85,Y4:0,90
    # Bob,78,X2:0,95
    # Charlie,92,O3:0,88
    # David,76,N1:0,92
    # Eve,89,P2:0,91

import csv
import statistics

def read_grades_from_csv(filename):
    grades = []
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            grades.append({
                'name': row['Name'],
                'maths': float(row['Maths Grade'].replace('Y', '').replace(':', '.'))
            })
    return grades

def calculate_average_grade(grades):
    return statistics.mean([grade['maths'] for grade in grades])

def find_highest_achiever(grades):
    return max(grades, key=lambda x: (x['maths'], x['science'], x['english']))

def highest_average_subject(grades):
    subjects = ['Maths', 'Science', 'English']
    subject_averages = {subject: statistics.mean([grade[f'{subject} Grade'] 
                                                for grade in grades]) 
                        for subject in subjects}
    return max(subject_averages, key=subject_averages.get)

def main():
    filename = 'student_grades.csv'
    grades = read_grades_from_csv(filename)
    
    average_grade = calculate_average_grade(grades)
    highest_achiever = find_highest_achiever(grades)
    top_subject = highest_average_subject(grades)
    
    print(f"Average grade across all subjects: {average_grade:.2f}")
    print("\nStudent(s) with the highest overall grade:")
    for name, subject_grades in highest_achiever.items():
        print(f"{name}: {subject_grades['maths']:.2f} (Maths), "
              f"{subject_grades['science']:.2f} (Science), "
              f"{subject_grades['english']:.2f} (English)")
    print(f"\nSubject with the highest average grade: {top_subject}")

if __name__ == "__main__":
    main()