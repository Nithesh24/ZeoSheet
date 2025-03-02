# ZeoSheet

ZeoSheet is a Google Sheets-like web application built with **React.js**, **Handsontable**, **HTML**, **CSS**, and **JavaScript**, offering a user-friendly interface for spreadsheet management.

## Features

- **Dynamic Spreadsheet UI** using Handsontable
- **Formula Support** for calculations
- **Undo/Redo Functionality** for seamless editing
- **User-friendly Interface** with essential spreadsheet tools
- **Download Option** to export the working spreadsheet as an Excel file

## Tech Stack

- **Frontend:** React.js, Handsontable, HTML, CSS, JavaScript
- **Deployment:** Netlify

## How to Use

- **Undo/Redo:** Allows users to revert or redo changes effortlessly.
- **Cell Formatting:** Select cells and apply formatting such as **bold, italic, highlight, font size changes, lowercase transformation**, etc.
- **Mathematical Formulas:** Click on the cell where you want to apply a formula and enter it just like in Excel, e.g., `=SUM(A1:C2)`.
- **Applying Formulas to Other Cells:** After entering a formula, select the applied cell and **drag the fill handle** to apply it to other cells automatically.
- **Download as Excel:** Click on the download option to export and save your spreadsheet as an Excel file.

## Available Mathematical Functions

### Basic Arithmetic Formulas
- `=A1+B1` → Adds values in A1 and B1
- `=A1-B1` → Subtracts B1 from A1
- `=A1*B1` → Multiplies A1 and B1
- `=A1/B1` → Divides A1 by B1
- `=A1^B1` → Raises A1 to the power of B1

### Aggregation Functions
- `=SUM(A1:C3)` → Sum of values in the range A1 to C3
- `=AVERAGE(A1:C3)` → Average of values in the range A1 to C3
- `=COUNT(A1:C3)` → Counts the number of numerical values in the range
- `=COUNTA(A1:C3)` → Counts the number of non-empty cells
- `=MAX(A1:C3)` → Returns the maximum value in the range
- `=MIN(A1:C3)` → Returns the minimum value in the range

### Logical Functions
- `=IF(A1>10, "High", "Low")` → Returns "High" if A1 is greater than 10, otherwise "Low"
- `=IFERROR(A1/B1, "Error")` → Returns "Error" if division fails
- `=AND(A1>5, B1<10)` → Returns TRUE if both conditions are met
- `=OR(A1>5, B1<10)` → Returns TRUE if at least one condition is met
- `=NOT(A1=10)` → Returns TRUE if A1 is NOT 10

### Text Functions
- `=CONCATENATE(A1, B1)` → Joins A1 and B1 (Use `=A1&B1` as a shorthand)
- `=LEFT(A1, 3)` → Extracts the first 3 characters from A1
- `=RIGHT(A1, 3)` → Extracts the last 3 characters from A1
- `=MID(A1, 2, 3)` → Extracts 3 characters from A1 starting at position 2
- `=LEN(A1)` → Returns the length of the text in A1
- `=LOWER(A1)` → Converts A1 to lowercase
- `=UPPER(A1)` → Converts A1 to uppercase
- `=PROPER(A1)` → Capitalizes the first letter of each word in A1
- `=TRIM(A1)` → Removes extra spaces from A1

### Date & Time Functions
- `=TODAY()` → Returns the current date
- `=NOW()` → Returns the current date and time
- `=YEAR(A1)` → Extracts the year from a date
- `=MONTH(A1)` → Extracts the month from a date
- `=DAY(A1)` → Extracts the day from a date
- `=HOUR(A1)` → Extracts the hour from a time
- `=MINUTE(A1)` → Extracts the minutes from a time
- `=SECOND(A1)` → Extracts the seconds from a time
- `=DATEDIF(A1, B1, "Y")` → Calculates years between two dates
- `=WEEKDAY(A1)` → Returns the day of the week as a number (1 = Sunday)

### Lookup & Reference Functions
- `=VLOOKUP(10, A1:B10, 2, FALSE)` → Looks for 10 in column A and returns the corresponding value from column B
- `=HLOOKUP(10, A1:J2, 2, FALSE)` → Looks for 10 in row 1 and returns the corresponding value from row 2
- `=INDEX(A1:C3, 2, 3)` → Returns the value at row 2, column 3
- `=MATCH(20, A1:A10, 0)` → Returns the position of 20 in column A
- `=OFFSET(A1, 2, 1)` → Returns the value from 2 rows down and 1 column to the right from A1

### Financial Functions
- `=PMT(0.05/12, 60, -20000)` → Calculates the monthly payment for a loan
- `=FV(0.05/12, 60, -200, -5000)` → Calculates future value of an investment

### Trigonometric & Mathematical Functions
- `=SIN(A1)`, `=COS(A1)`, `=TAN(A1)` → Returns sine, cosine, and tangent of A1 (in radians)
- `=PI()` → Returns the value of π
- `=ROUND(A1, 2)` → Rounds A1 to 2 decimal places
- `=ROUNDUP(A1, 2)` → Rounds A1 up to 2 decimal places
- `=ROUNDDOWN(A1, 2)` → Rounds A1 down to 2 decimal places
- `=MOD(A1, B1)` → Returns remainder of A1 divided by B1
- `=ABS(A1)` → Returns absolute value of A1
- `=SQRT(A1)` → Returns the square root of A1
- `=LOG(A1)` → Returns the natural logarithm (base e) of A1
- `=LOG10(A1)` → Returns logarithm base 10 of A1
- `=EXP(A1)` → Returns e^A1

### Random Functions
- `=RAND()` → Generates a random number between 0 and 1
- `=RANDBETWEEN(1, 100)` → Generates a random integer between 1 and 100

## Deployment

The application is deployed on **Netlify**. You can access it [here](https://zeosheet-nithesh-kumar.netlify.app/).

## Screenshots

Adding formula to analyze data and determine in loss or profit
![image](https://github.com/user-attachments/assets/e6412688-b4cb-4e4f-b6c8-fade3a725a23)

Using drag feature to implement the formula used in current cell in the selected cells
![image](https://github.com/user-attachments/assets/7f52269f-ab7f-4969-b960-25489c19458d)

Using formatting feature to format data
![image](https://github.com/user-attachments/assets/0f15326c-286b-4059-857b-7adf2d762577)

## License

This project is licensed under the **MIT License**.

---

**Happy Hacking!** 🚀

