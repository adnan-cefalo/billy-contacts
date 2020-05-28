A table that shows a filterable list of billy contacts.

## Getting started
- Set api token in the .env file of your appropriate environment for the key: REACT_APP_API_TOKEN.
- Run command `yarn` to install dependencies.
- Run command `yarn start` to run the dev server.

## Limitation of implementation
The country is currently filtered on the client side. This is due to the api not apparently supporting filtering by 
country. Ideally it should be filtered on the server side for consistent user experience.

## The task
Make a table showing an overview of the contacts on a organization.

### Requirements​:
1. List contacts directly from our API.
2. For each row in the table show a contact with the following information. Name, address, country, whether it’s a 
customer and / or supplier and finally whether the contact has been archived.
3. Store the filters in the URL so bookmarking and link sharing works.
4. Implement filters
    1. Archived: On/off whether to include archived contacts. By default don’t show archived contacts.
    2. Country Id: Filter by country.
    3. Both filters may be applied at the same time.
5. The page should be styled with bootstrap.

### Practical information
API documentation can be found here https://www.billy.dk/api/.

Use the staging API available at ​https://api.staging.billy.dk
