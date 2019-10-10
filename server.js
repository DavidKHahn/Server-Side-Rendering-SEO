// server.js (example)
import express from 'express';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const app = express();
// keeps static files inside
app.use(express.static('/public'));
// using fs module to read file, parsing the data into JSON format to send to client's browser
const robots = JSON.parse(fs.readFileSync('/public/robots.json', 'utf8'));
// Represents the app in use
const RobofriendsApp = React.createElement(App);
app.get('/', (request, response) => {
    response.render('index', {
// 'renderToString' converts app into string (server -> client has to send text)
        content: renderToString(RobofriendsApp({data: robots}))
    });
});

// ReactDOM.hydrate() is similar to the rendering method (attaches JS functionalities, event handlers to the DOM)

// ReactDOMServer.renderToNodeStream() -> faster than renderToString()
// ReactDOMServer.renderToString()
