# Regex-Based Web Form Validator

This project is a simple yet powerful demonstration of **form validation using Regular Expressions (RegEx)** in JavaScript. It is designed to help beginners understand how to apply regex patterns to validate different types of input in a clean and responsive web form.

---

## Features

-  Real-time validation of:
  - First Name
  - Last Name
  - Email
  - Password
  - Telephone number
  - Bio
-  Visual feedback for valid and invalid inputs
-  Clean UI with responsive design using CSS
-  Focused on understanding and applying RegEx

---

## Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **RegEx** for validation logic

---

## Project Structure
project/
│
├── index.html # Main HTML form
├── style.css # Styling for layout and feedback
└── script.js # Validation logic with regex

---

## Validation Rules (RegEx Patterns)

| Field       | Pattern Description                                                  |
|-------------|-----------------------------------------------------------------------|
| First Name  | Alphanumeric, 3–16 characters                                         |
| Last Name   | Alphanumeric, 3–16 characters                                         |
| Email       | Must be a valid email address (e.g., `example@example.com`)          |
| Password    | Alphanumeric + `@`, `_`, `-`, 6–20 characters                         |
| Telephone   | Must match format `333-333-3334` (11 digits)                          |
| Bio         | Only lowercase letters, underscores or hyphens, 8–50 characters       |

## Screenshots


![ValidatingWebForms2](https://github.com/user-attachments/assets/5c1cec19-eae0-4c29-9bbd-ea7b1b491bac)
![ValidatingWebForms](https://github.com/user-attachments/assets/7c16da5d-0f94-45c1-a390-6648da35afe4)
![ValidatingWebForms3](https://github.com/user-attachments/assets/68297f34-f52b-4b9b-8df0-85136adc0c30)

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/DenizzALP/ValidatingWebForms.git
   ```
2. Open index.html in your browser.

3.Fill out the form and observe validation feedback in real-time.

## Purpose

This project was built primarily to practice and visualize the use of Regular Expressions in a frontend context. It serves as both a learning tool and a practical example for validating user input

