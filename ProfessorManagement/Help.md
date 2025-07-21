---

Develop a ReactJS application for a university to manage its professors. The application will interact with a JSON server to perform CRUD operations on professor data.

Sample db.json:
json 
{ "professors": [ { "professorID": "1", "name": "Dr. John Smith", "email": "john.smith@university.edu" },
{ "professorID": "2", "name": "Dr. Jane Doe", "email": "jane.doe@university.edu" } // ... other professors can be added here ] } 

Professor Entity:
    professorID: Unique Identifier for the Professor.
    name: Name of the professor.
    email: Email address of the professor.

Tasks:
    1. Set up a basic React application.
    2. Implement custom hooks or services in React to interact with the JSON file using JSON Server.
    3. Design forms in React to add new professors with proper validations.
    4. Submit these details to be stored in the JSON Server. 
    5. Create a React component for the Professor entity to display details of a specific professor by retrieving JSON data from the JSON Server.

You need to complete the following files:
    1. ./src/components/AddProfessorForm.js
    2. ./src/services/api.js
    3. ./src/components/ProfessorDetails.js
    4. ./src/hooks/useProfessors.js

Notes:

1. Do not change the structure of the db.json file.
2. Focus on the functionality; UI styling is not required for this task.

Testing and Submitting your code:

    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.