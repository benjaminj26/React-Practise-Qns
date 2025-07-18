---

Develop a simple ReactJS application named "TravelWishList". This application will consist of one component - WishList. This component will render a list of travel destinations that a user wishes to visit. These locations will be passed to the component using props.

Implement the following functionalities:

Initialization of WishList Component:
    - On app initialization, the WishList component should display a list of travel locations based on the initial props.
    - Ensure the list is correctly rendered in the DOM.

Props and Component Update:
    - Pass an initial set of locations to the WishList component through props.
    - Modify the props by adding or removing a location. 
    - Use the useEffect hook to detect these changes and log a message to the console.

Console Log on Change:
Log a message to the console every time the props change, showing the previous and current values of the wish list.

Adding Locations through a Form (Bonus):
    - Create a simple form within the component to add a new location.
    - When a new location is submitted, update the list and check if the useEffect hook correctly logs the change.

Wish List Rendering:
    - Render each location passed through props.
    - Ensure the list updates and rImplement the following functionalities:enders correctly when new locations are added.

Boundary and Edge Cases:
Handle scenarios with an empty list, duplicate locations, and null or undefined inputs.

UI/UX Checks:
Ensure the list and, if implemented, the form are visually appealing, easy to read, and user-friendly.

Your Task:

Complete the development of the following component in your React application:
    - WishList component in src/app/wish-list/WishList.js
    - Main application logic in src/app/App.js

Notes:
    1. Do not change file names, class names, or method declarations.
    2. Focus on the functionality; UI styling is not required for this task.

Testing and Submitting your code:

    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.