---

Develop an advanced ReactJS application named "PropertyLocator". This application will enable users to search for a property and add it to an interactive map. Each property on the map will be represented by a PropertyMarker component.

Implement the following functionalities:

Initialization of PropertyLocator:
    - On launching the app, there should be a user interface for searching and adding properties to the interactive map.

Searching and Adding Property:
    - Users can search for properties using the provided interface.
    - Selected properties should be added to the map using the PropertyMarker component.

Use of useEffect in PropertyMarker:
    - Implement the useEffect hook for initializing the map marker in the PropertyMarker component.
    - Utilize the useEffect hook to update the map marker when the property data changes.

Performance Optimization with useMemo or useCallback (Bonus):
    - Implement logic to determine insignificant changes in property data.
    - Use useMemo or useCallback to optimize performance and prevent unnecessary updates of the map marker.

Removing a Marker (Extra Challenge):
    - Add a feature to remove a marker from the map.
    - Use a cleanup function within useEffect to handle the removal of the marker when the PropertyMarker component is unmounted.

Data Accuracy:
    - Ensure that the data passed to each PropertyMarker accurately represents the property and its geographical location.

Boundary and Edge Cases:
    - Test behavior with non-existent properties, duplicate additions, and rapid marker additions.

Interaction Tests:
    - Test the processes of searching, adding, updating, and removing property markers for smooth functionality and accurate map representation.

UI/UX Checks:
    - Ensure the search and add interface is intuitive and user-friendly.
    - Property markers should be clearly distinguishable on the map.
    - Interactive elements should be responsive and easy to use.

You need to complete the following files:
    1. ./src/app/property-marker/PropertyMarker.js
    2. ./src/app/App.js

Notes:
    1. Do not change file names, class names, or method declarations.
    2. Focus on the functionality; UI styling is not required for this task.

Testing and Submitting your code:
    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.