import axios from 'axios';
import environment from './environments/environment.ts'
const API_URL = `${environment.apiUrl}/properties`;
// use API_URL
const PropertyService = {
  getAllProperties: async () => {
  //  get all properties from json server
  console.log('API Url',API_URL);
  
    const response = await axios.get(API_URL);
    return response.data;
  },

  getPropertyByID: async (propertyID) => {
    // get property By id from json server
    const response = await axios.get(`${API_URL}/${propertyID}`);
    return response.data;
  },

  addProperty: async (newProperty) => {
    // add New property by using post call 
    const response = await axios.post(API_URL, newProperty);
    return response.data;
  }
};

export default PropertyService;