# customer-orders-api
This API connects to the sqlite database provided in the tech test brief.
The API runs on local host, the port and https address are displayed in the terminal when you run the API.

### SETUP
Clone the repo, cd into it and run npm install. 

### SCRIPTS
npm run api //runs api on localhost
npm run appTests //runs the appTests
npm run helpersTests //runs the helpersTests

### AVAILABLE ENDPOINTS
http://localhost:XXXX/api/view-items //returns an array of the items currently stored in the db
http://localhost:XXX/api/add-new-item //allows one to add a new item to the item table in the db
Request body to add a new item:
{
            "name": "newItemName",
            "cost": 12345,
            "supplier": {
                "name": "supplierName"
            }
}