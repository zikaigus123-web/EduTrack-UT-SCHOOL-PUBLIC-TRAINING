console.log("API JS BERHASIL DIMUAT");
/******************************************************************
 * EduTrack API Client
 * Frontend -> Google Apps Script
 ******************************************************************/

const API_URL = "https://script.google.com/macros/s/AKfycbwvZ8gK5u7vhZdNEpD5Jp5qaQctn7J1pDVOBkbvJ5zOhgN8Q0qio6uNoBn4Z938FvZU/exec";

/******************************************************************
 * Generic GET Request
 ******************************************************************/

async function apiGet(action) {

    try {

        const response = await fetch(`${API_URL}?action=${action}`);

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            success: false,
            message: error.message,
            data: null
        };

    }

}

/******************************************************************
 * Generic POST Request
 ******************************************************************/

async function apiPost(action, data = {}) {

    try {

        const formData = new URLSearchParams();

        formData.append("action", action);

        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        const response = await fetch(API_URL, {
            method: "POST",
            body: formData
        });

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            success: false,
            message: error.message,
            data: null
        };

    }

}

/******************************************************************
 * API
 ******************************************************************/

const API = {

    // System
    ping() {
        return apiGet("ping");
    },

    // Users
    getUsers() {
        return apiGet("getUsers");
    },

    login(username, password) {
        return apiPost("login", {
            username,
            password
        });
    },

    // Events
    getEvents() {
        return apiGet("getEvents");
    },

    saveEvent(eventData) {
        return apiPost("saveEvent", eventData);
    },

    updateEvent(eventData) {
        return apiPost("updateEvent", eventData);
    },

    deleteEvent(eventId) {
        return apiPost("deleteEvent", {
            eventId
        });
    },

    // Participants
    getParticipants() {
        return apiGet("getParticipants");
    },

    saveParticipant(participantData) {
        return apiPost("saveParticipant", participantData);
    },

    updateParticipant(participantData) {
        return apiPost("updateParticipant", participantData);
    },

    deleteParticipant(participantId) {
        return apiPost("deleteParticipant", {
            participantId
        });
    },

    // Dashboard
    getDashboard() {
        return apiGet("getDashboard");
    },

    // Settings
    getSettings() {
        return apiGet("getSettings");
    },

    // Logs
    getLogs() {
        return apiGet("getLogs");
    }

};
