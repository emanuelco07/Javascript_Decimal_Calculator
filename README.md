# Simple Web Calculator

A clean, responsive, and functional calculator web application built using modern web technologies. This project implements basic arithmetic operations with a focus on a user-friendly interface and logical validation.

## Preview

<p align="center">
  <img src="test_calculator.gif" width="300" alt="Calculator Demonstration" />
</p>

## Description

This project is a web-based calculator that allows users to perform standard mathematical calculations. It features a modern design inspired by mobile interfaces, utilizing CSS Grid and Flexbox for a responsive layout. The application handles operations such as addition, subtraction, multiplication, division, modulo, and exponentiation.

## Features

- Basic arithmetic operations: +, -, *, /
- Advanced operations: Modulo (%) and Exponentiation (**)
- Logic validation: Prevents the entry of multiple consecutive operators to avoid syntax errors
- Clear (C) and Delete (del) functions for efficient input correction
- Responsive design with HSL color schemes and interactive button states

## Technologies Used

- **HTML5**: For the structural markup of the calculator and display
- **CSS3**: For custom styling, including Grid layout, Flexbox centering, and hover/active transitions
- **JavaScript (ES6)**: For the calculation logic, input handling, and DOM manipulation

## Usage

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project folder.
3. Open the `index.html` file in any modern web browser to run the application.

## Technical Implementation Notes

The application uses a custom validation function `verifyIfIsOperator` to ensure that mathematical operators are not repeated incorrectly. The calculation logic is handled through the `eval()` function, wrapped in a try-catch block to ensure that any invalid operations result in an "Error" message on the display instead of breaking the application.

## References

This project was developed with the help of resources and tutorials found here:
[View Tutorial](https://www.youtube.com/watch?v=I5kj-YsmWjM&list=WL)