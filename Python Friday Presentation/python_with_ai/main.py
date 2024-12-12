import csv
import os

def load_grades(filename):
    grades = []
    try:
        with open(filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                grades.append({
                    'name': row['Name'],
                    'maths': float(row['Math Grade']),
                    'science': float(row['Science Grade']),
                    'english': float(row['English Grade'])
                })
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
    except csv.Error as e:
        print(f"Error reading CSV file: {e}")
    return grades

def calculate_average_grade(grades):
    subjects = ['Maths', 'Science', 'English']
    subject_averages = {}
    for grade_list in zip(*[grade.values() for grade in grades]):
        subject_averages[subjects[list(grade_list).index(max(grade_list))]] = sum(grade_list) / len(grade_list)
    return subject_averages

def find_highest_achiever(grades):
    highest_total = max(grade['maths'] + grade['science'] + grade['english'] for grade in grades)
    return next((grade for grade in grades if grade['maths'] + grade['science'] + grade['english'] == highest_total), None)

def main():
    filename = 'student_grades.csv'
    grades = load_grades(filename)
    
    if grades:
        average_grades = calculate_average_grade(grades)
        highest_achiever = find_highest_achiever(grades)
        
        print("Average grades by subject:")
        for subject, avg in average_grades.items():
            print(f"{subject}: {avg:.2f}")

        print("\nStudent(s) with the highest overall grade:")
        if isinstance(highest_achiever, dict):
            print(f"Name: {highest_achiever['name']}, "
                  f"Grade: {sum(highest_achiever.values()):.2f}")
        else:
            print("No student found with highest grade.")

        print("\nSubject with highest average grade:")
        print(f"{max(average_grades, key=average_grades.get)}: {average_grades[max(average_grades)]:.2f}")

if __name__ == "__main__":
    main()