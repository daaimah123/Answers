# Task 1: Calculate and add the sum of all ages to each friend object
# Task 2: Create a list of friends older than the average age
# Task 3: Generate a list of strings with initials and age
# Bonus: Implement these tasks using functions

# Example input:
myFriends = [
    {"firstname": "Alice", "lastname": "Smith", "age": 30},
    {"firstname": "Bob", "Johnson": "Jane", "age": 25},
    {"firstname": "Charlie", "lastname": "Brown", "age": 35},
    {"firstname": "David", "lastname": "Wilson", "age": 28},
    {"firstname": "Emily", "lastname": "Anderson", "age": 32},
]

# Your code goes here

def add_sum_of_ages(friends):
    total_age = sum(f["age"] for f in friends)
    for friend in friends:
        friend["total_age"] = total_age
    return friends

def get_older_than_avg(friends):
    avg_age = sum(f["age"] for f in friends) / len(friends)
    return [friend for friend in friends if friend["age"] > avg_age]

def generate_initials_and_age(friends):
    return [f"{f.get('firstname')[0]}{f.get('lastname')[0]}: {f['age']}" for f in friends]

def main():
    myFriends = [
        {"firstname": "Alice", "lastname": "Smith", "age": 30},
        {"firstname": "Bob", "Johnson": "Jane", "age": 25},
        {"firstname": "Charlie", "lastname": "Brown", "age": 35},
        {"firstname": "David", "lastname": "Wilson", "age": 28},
        {"firstname": "Emily", "lastname": "Anderson", "age": 32},
    ]

    # Task 1
    myFriends = add_sum_of_ages(myFriends)

    # Task 2
    older_than_avg = get_older_than_avg(myFriends)

    # Task 3
    initials_and_age = generate_initials_and_age(myFriends)

    print("Initials and age:")
    for item in initials_and_age:
        print(item)

# do not remove below lines of code
if __name__ == "__main__":
    main()