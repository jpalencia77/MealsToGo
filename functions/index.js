/* eslint-disable prettier/prettier */

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.geocode = onRequest((request, response) => {
    geocodeRequest(request, response);
});

exports.placesNearby = onRequest((request, response) => {
    placesRequest(request, response);
});
