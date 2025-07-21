---

Develop a segment of a real estate platform using ReactJS. This platform should allow users to add new properties and view detailed attributes of specific properties via their unique ID.

Sample db.json:
{
  "properties": [
    {
      "id":"1",
      "propertyID": "001",
      "type": "Apartment",
      "location": "Downtown",
      "price": "$250,000",
      "rooms": "3",
      "size": "1500 sq.ft"
    },
    {
      "id":"2",
      "propertyID": "002",
      "type": "Villa",
      "location": "Suburb",
      "price": "$500,000",
      "rooms": "5",
      "size": "3000 sq.ft"
    }
  ]
}

Implement the following functionalities:

PropertyService: 
  - This service will handle HTTP requests to fetch and add property data. 
  -  It should include methods to retrieve all properties, retrieve a property by ID, and add a new property.

PropertyList Component: 
  - A component that displays a list of properties. 
  - It should use the PropertyService to fetch and display property data.

PropertyDetail Component: 
  - A component to display detailed information about a property. 
  - It should be capable of fetching data using a property's unique ID through the PropertyService.

AddProperty Component: 
  - A form component that allows users to input data for a new property and submit it to the PropertyService to be added to the database.

You need to complete the following files:
1. ./src/AddProperty.js
2. ./src/PropertyDetail.js
3. ./src/PropertyList.js
4. ./src/PropertyService.js

Notes:
1. Ensure that the state management in your components is handled effectively, considering the asynchronous nature of HTTP requests.
2. Focus on the functionality of components and services; styling and templating are not required for this task.
3. Do not modify the structure of the db.json file.
4. Make sure to handle loading states and potential errors in your components.

Testing and Submitting your code:

    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.