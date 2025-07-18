---

Develop a patient registration form for a clinic using ReactJS. The form should be designed to capture the patient's name, date of birth, medical history, and current medications, and incorporate routing based on validation outcomes.

Fields:
    Patient Name: Text field
    Date of Birth: Date picker
    Medical History: Textarea
    Current Medications: Text field

Tasks:

1. Create a patient registration form component with the specified fields.
2. Include validation for each input.
3. Verify form submission with all valid inputs.
4. Verify form submission with empty mandatory fields.
5. Ensure that the date of birth is not a future date.
6. Ensure proper error messages are displayed for both valid and invalid data entries.
7. If validations pass, navigate to a welcome page using React Router.
8. If validations fail, navigate to an Error Page using React Router.

You need to complete the following files:
1. ./src/ErrorPage.js
2. ./src/PatientForm.js
3. ./src/WelcomePage.js

Notes:
1. Focus on the functionality; UI styling is not required for this task.
2. Ensure the use of React Router for navigation.
3. Do not change the structure of the db.json file.

Testing and Submitting your code:
    1. Click on WeCP Projects button to open the menu.
    2. Click on Start frontend server to start the react server.
    3. Click on Open preview to view the GUI.
    4. Click on Test & Submit app to test your code. You will be given a congratulations message if the task is completed perfectly.