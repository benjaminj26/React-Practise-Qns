---

Develop a ReactJS application named "PropertyPortal". The application will include a parent component PropertyList and a child component PropertyDetails. The PropertyList component maintains an array of properties and renders each property's details using the PropertyDetails component.

Implement the following functionalities:
    
    Initialization of PropertyList:
        - On application initialization, PropertyList should display a list of properties.
        - Render each property using PropertyDetails.

    Use of useEffect Hook in PropertyDetails:
        - Within PropertyDetails, use the useEffect hook to fetch initial data for its respective property when the component mounts.

    Logging with useEffect Cleanup:
        - Implement a cleanup function in the useEffect hook of PropertyDetails to log a message to the console when the component unmounts.

    Dynamically Add and Remove Properties (Bonus):
        - Allow dynamic addition and removal of properties in PropertyList.
        - Ensure that adding a property updates the list and renders a new PropertyDetails.
        - Implement a removal feature that deletes a property from the list, unmounts PropertyDetails, and triggers the cleanup function.
    
    Ensure Correct Data Propagation:
        - Ensure data passed from PropertyList to PropertyDetails is accurate, probably using props or context.

Boundary and Edge Cases:
    Test behavior with an initially empty property list, handling of non-existent properties, and adding properties with incomplete data.

Interaction Tests:
    Test addition and removal processes, handling of multiple properties, and correct UI updates.

UI/UX Checks:
    Ensure a user-friendly and organized display of properties and interactive elements.

You need to complete the following files:
    1. src/app/property-list/PropertyList.js
    2. src/app/property-details/PropertyDetails.js

Notes:
    1. Do not change file names, class names, or method declarations.
    2. Focus on the functionality; UI styling is not required for this task.

Testing and Submitting your code:

    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.