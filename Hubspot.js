const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({"accessToken":"pat-na1-b9de789b-7c03-4830-97ca-3f0f0ff868f5"});

const createContact = async (properties) => {

    
      const SimplePublicObjectInput = { properties };
      
      try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);
        console.log(JSON.stringify(apiResponse.body, null, 2));
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e.body.message)
      }


    
}

const readContact = async (contactID) => {
    try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.getById(contactID);
        return apiResponse
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e.body.message)
      }
}


const updateContact = async (contactID ,properties) => {
    try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.update(contactID, properties);
        console.log(JSON.stringify(apiResponse.body, null, 2));
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e.body.message)
      }
}


const deleteContact = async (contactID) => {

    try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.archive(contactID);
        console.log(JSON.stringify(apiResponse.body, null, 2));
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e)
      }
    
}

const readAllContact = async () => {
    const apiResponse = hubspotClient.crm.contacts.getAll()
    return apiResponse
}



const createCompany = async (properties) => {
    const SimplePublicObjectInput = { properties };

try {
  const apiResponse = await hubspotClient.crm.companies.basicApi.create(SimplePublicObjectInput);
  console.log(JSON.stringify(apiResponse.body, null, 2));
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}
}


const readCompanies = async (companyID, properties) => {
    try {
        const apiResponse = await hubspotClient.crm.companies.basicApi.getById(companyID, properties, propertiesWithHistory, associations, archived, idProperty);
        return apiResponse
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e)
      }
}

const updateCompanies = async (companyID, properties) => {
    try {
        const apiResponse = await hubspotClient.crm.companies.basicApi.update(companyId, SimplePublicObjectInput, idProperty);
        console.log(JSON.stringify(apiResponse.body, null, 2));
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e)
      }
}


const deleteCompany = async (companyId) => {
    try {
        const apiResponse = await hubspotClient.crm.companies.basicApi.archive(companyId);
        console.log(JSON.stringify(apiResponse.body, null, 2));
      } catch (e) {
        e.message === 'HTTP request failed'
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e)
      }
}
module.exports = {createContact, readContact, updateContact, deleteContact, readAllContact}