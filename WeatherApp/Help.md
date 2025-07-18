---

Develop a ReactJS application named "WeatherApp". This application will focus on showcasing React's ability to transform and display data dynamically. The application will consist of a main WeatherComponent.

Implement the following functionalities:

WeatherComponent:
    - Display the current temperature in Celsius.
    - Implement a dropdown to allow users to choose the temperature format (Celsius, Fahrenheit, Kelvin).
    - Use a custom function, similar to an Angular pipe, to transform and display the temperature in the selected format.

temperatureFunction:
    - Create a function that takes the original temperature in Celsius and the desired format as parameters.
    - Convert the Celsius temperature to the chosen format.

Requirements:
    - Initialize a default temperature (e.g., 25°C) in the WeatherComponent using the useState and useEffect hooks.
    - The default display should be in Celsius.
    - When a different format is selected from the dropdown, transform and display the temperature in that format.
    Bonus:
    - Add functionality to update the temperature. Reflect the change in the chosen format.

Test Cases:
    - Initialization of WeatherComponent:
        On app initialization, display a default temperature in Celsius.
    - Display with temperatureFunction:
        Correctly display the temperature in Celsius, Fahrenheit, and Kelvin based on the dropdown selection.
    - Functionality of temperatureFunction:
        Test the function with known Celsius values to ensure it returns expected Fahrenheit and Kelvin values.
    - Dropdown Interaction:
        Include Celsius, Fahrenheit, and Kelvin as dropdown options.
        Ensure changing the selection immediately updates the temperature format.
    - Update Temperature (Bonus):
        Implement a mechanism to update the temperature.
        Ensure the display reflects the new temperature in the current format.

Boundary and Edge Cases:
    Handle negative temperatures and extreme values correctly.
        
Responsive Behavior:
    Ensure the dropdown and temperature display are responsive on various screen sizes.

You need to complete the following files:
    1. WeatherComponent in src/app/weather/Weather.js
    2. Temperature conversion function in src/app/utils/temperatureFunction.js

Notes:
    1. Do not change file names, class names, or method declarations.
    2. Focus on functionality; UI styling is not required for this task.

Testing and Submitting your code:

    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.