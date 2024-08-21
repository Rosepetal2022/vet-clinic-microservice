# Vet Clinic Search 

## Menu

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Example Call](#example-call)
- [Usage](#usage)

## Features

Users can search for vet clinic by name or town. When they click on the particular clinic they want, they will get relevent information on that clinic.

## Tech Stack

- Node.js 
- express
- Javascript


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rosepetal2022/vet-clinic-microservice.git
   cd vet-clinic-microservice
   ```
2. npm install
    ``` npm install ```
4. Start the aplication from the root folder.
    ```node server.js```

## Example Call 
**Base URL:**  http://localhost:5000/search
- This is the local endpoint for searching veterinary clinics. Replace `localhost` and `5000` with your server's address and port if you're running it in a different environment.

**Query Parameter:**
- **`query`**: This parameter specifies the search term used to find veterinary clinics. It should be URL-encoded to ensure special characters are properly handled.

**Example URL:**
http://localhost:5000/search?query=Portland


Here's how you might use this endpoint in the frontend of your application:

```javascript
const fetchVets = async (searchQuery) => {
    setLoading(true); // Set loading state to true to show a loading indicator
    try {
        // Fetch data from the API, encoding the search query
        const response = await fetch(`http://localhost:5000/search?query=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data'); // Handle any errors if the response is not OK
        }
        const data = await response.json(); // Parse the JSON data from the response
        setClinics(data); // Update the state with the fetched clinic data
        console.log(data); // Log the data for debugging purposes
    } catch (err) {
        setError(err.message); // Set error state if an exception is caught
    } finally {
        setLoading(false); // Set loading state to false when the fetch is complete
    }
};
```

## Usage 

This project was intended to be used as a microservice to my main application, my pet portal. However, anyone can use this project but will need a sperate google places api key of their own. 

## Contact
For questions for support, please contact: 
+ **Email** marcotter25@yahoo.com
+ **GitHub** [Rosepetal2022](https://github.com/Rosepetal2022)