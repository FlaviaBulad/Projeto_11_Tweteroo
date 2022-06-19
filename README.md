# API Tweteroo

## Description

### This is the 11th project for Driven Education's fullstack developer bootcamp: an API for a Twitter-like app "Tweteroo". Built using Nodejs, Express and CORS. 

## Usage
        
- **POST** `/sign-up`
    - Receives (through the request body), a parameter **username** and an **avatar**, containing the user's username and avatar picture:
        
        ```jsx
        {
            username: "bobesponja",
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
- **POST** `/tweets`
    - Receives (through the request body), the parameters `username` and `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
            tweet: "eu amo o hub"
        }
        ```

- **GET** `/tweets`
    - Return the last 10 tweets posted