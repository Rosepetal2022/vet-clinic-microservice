# Vet Clinic Search 

## Menu

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Example Call](#example-call)
- [Usage](#usage)

## Features

Users can search for vet clinic by name. When they click on the particular clinic they want, they will get relevent information on that clinic.

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
```bash
    const fetchVets = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/search?query=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setClinics(data); 
            console.log(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
```


## Usage 

This project was intended to be used as a microservice to my main application, my pet portal. However, anyone can use this project but will need a sperate google places api key of their own. 

## Contact
For questions for support, please contact: 
+ **Email** marcotter25@yahoo.com
+ **GitHub** [Rosepetal2022](https://github.com/Rosepetal2022)