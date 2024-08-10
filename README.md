# NeonWave

## Description
**NeonWave** is a reference project demonstrating how to utilize Vanilla JavaScript and the OpenAI Chat Completions API without relying on any external dependencies or libraries. The project showcases techniques such as making a fetch request, streaming data, decoding streamed data, and running the script with Node.js. It is inspired by a YouTube tutorial titled "Consume Web streams from OpenAI using vanilla JavaScript - NO DEPENDENCIES!" which you can view [here](https://youtu.be/o1yKuH86_So?si=xC3CpaEHUVDFKbvn).

## Technologies Used
- **Vanilla JavaScript**: Core JavaScript without any external libraries or frameworks.
- **OpenAI Chat Completions API**: Used to generate responses in a streaming fashion.
- **Node.js**: For running the script in a server environment.

## Features
- **Fetch API**: Demonstrates making a fetch request to the OpenAI API and handling the response.
- **Streaming Data**: Streams data from the API and updates the webpage as the data is received.
- **Text Decoding**: Utilizes the `TextDecoder` API to convert raw network data into readable text.
- **Abort Controller**: Implements an Abort Controller to stop network requests when necessary.
- **Error Handling**: Highlights the importance of error handling in API interactions.

## Installation
To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/NeonWave.git
   cd NeonWave


2. **Run the Script:**

    You can run the script in a Node.js environment:

        node main.js

    Alternatively, you can serve the HTML file using a local web server to see the streaming data in action in the browser.

3. **Open the Project in a Browser:**

    Open index.html in your browser to see the script in action.

## Usage ## 
- Fetch API: Learn how to make a basic fetch request to the OpenAI API.
- Streaming Data: Observe how to handle streamed data in real-time as it arrives from the API.
- Text Decoding: See how to use TextDecoder to process streamed chunks of data.
- Abort Controller: Understand how to cancel ongoing network requests.

## Concepts Covered ##
- Making a Fetch Request
- Handling Non-streamed and Streamed Data
- Decoding Streamed Data
- Running the Script with Node.js
- Adding an Abort Controller
- Recap of Fetch API Streaming
- Contributing
- Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull - request. You can also open issues to report bugs or suggest new features.

## License ##

This project is licensed under the MIT License. See the LICENSE file for more information.
