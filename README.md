# Calculator

This is a simple calculator built with HTML, CSS, and JavaScript. The project demonstrates basic DOM manipulation, event handling, and mathematical expression evaluation.

## Description

The project represents a web page with a functional calculator that supports addition, subtraction, multiplication, division, as well as "AC" (clear), "DEL" (delete), and "%" (percentage) functions. The user can input numbers and operators, and the result is displayed in real-time.

## Features 

### HTML 
The main container of the calculator (`calculator-grid`) includes buttons for all operations and numbers. The element with the class `current-operand` displays the current entered expression or the result.
### CSS 
 
- A `grid` layout is used to position the calculator buttons.

### JavaScript 

For each button, an event listener is added. Depending on the button clicked, different actions are performed:
 
  - The **AC**  button clears the screen.
 
  - The **DEL**  button removes the last character from the expression.
 
  - The **%**  button calculates the percentage of the current number.
 
  - The **=**  button evaluates the expression using the `eval()` function.

  - For all other buttons, their text is appended to the current expression.

## Usage Example 
 
1. Enter a mathematical expression (e.g., `5 + 3`).
 
2. Click the **=**  button to get the result.
 
3. Use **AC**  to clear the calculator or **DEL**  to remove the last character.

## How It Works 

1. When the user clicks any calculator button, an event handler is triggered.
 
2. Depending on the button clicked, an action is performed: 
  - Numbers and operators are added to the `calculation` string.
 
  - Special function buttons (**AC** , **DEL** , **%** , **=** ) execute their respective actions.

3. After each action, the display is updated to show the current calculation or result.
