const express = require('express');

const routing = express.Router();
const notesController = require('../Controller/myNotes');

/**
 * @swagger
 * /notes:
 *    get:
 *      summary: API to fetch all the notes.
 *      description: Retrieve list of notes present in the database.
 *      responses:
 *        200: 
 *          description: Success
 *        400: 
 *          description: No notes available in the repo
 */
routing.get('/notes', notesController.getNotes);

/**
 * @swagger
 * /notes:
 *  post:
 *    summary: API to add new notes.
 *    description: Creates a new notes by inserting new notes data to the database.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              notesID:
 *                description: Id of the new notes
 *                type: Number
 *                example: 124
 *              name:
 *                description: Name of the person who added notes
 *                type: String
 *                example: Alex
 *              data:
 *                description: Data of the notes
 *                type: String
 *                example: Mongo Atlas is very easy to configure and use
 *    responses:
 *      201:
 *        description: Created
 */
routing.post('/notes', notesController.newNotes)

/**
 * @swagger
 * /notes/{id}:
 *  put:
 *    summary: API to update existing notes.
 *    description: Updates notes data to the database.
 *    parameters:
 *    - in: path
 *      name: id
 *      description: Id to retrieve the notes
 *      required: true
 *      type: Number
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: Name of the person who added notes
 *                type: String
 *                example: Alex
 *              data:
 *                description: Data of the notes
 *                type: String
 *                example: Mongo Atlas is very easy to configure and use
 *    responses:
 *      200:
 *        description: Success
 */
routing.put('/notes/:id', notesController.updateNotes);

/**
 * @swagger
 * /notes/{id}:
 *  delete:
 *    summary: API to delete existing notes.
 *    description: This will delete notes data based on notesID from the database.
 *    parameters:
 *    - in: path
 *      name: id
 *      description: Id to retrieve the notes
 *      required: true
 *      type: Number
 *    responses:
 *      200:
 *        description: Success
 */
routing.delete('/notes/:id', notesController.deleteNotes);

routing.all('*', notesController.invalid);

module.exports = routing;