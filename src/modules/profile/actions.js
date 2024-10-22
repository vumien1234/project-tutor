import _ from 'lodash';
import moment from 'moment';
import { eventData } from './demoData';

// EXPORT ALL ACTION TYPES
export const FETCH_EVENTS = 'fetch_events';
export const CREATE_EVENT = 'create_event';
export const UPDATE_EVENT = 'update_event';
export const DELETE_EVENT = 'delete_event';
export const PAST_EVENTS = 'past_events';
export const UPCOMING_EVENTS = 'upcoming_events';

// Utility to safely get events from localStorage
function getEventsFromStorage() {
    const events = localStorage.getItem('events');
    if (!events) {
        localStorage.setItem('events', JSON.stringify(eventData)); // Set demo data if localStorage is empty
        return eventData; // Return demo data as fallback
    }
    try {
        return JSON.parse(events); // Parse events from storage
    } catch (error) {
        console.error('Error parsing events from localStorage:', error);
        return eventData; // Return demo data if JSON is invalid
    }
}

// FETCH EVENTS FROM LOCAL STORAGE
export function fetchEvents() {
    const events = getEventsFromStorage();
    return {
        type: FETCH_EVENTS,
        payload: events
    };
}

// CREATE NEW EVENT ACTION
export function createEvent(values) {
    let events = getEventsFromStorage();
    events.push(values); // Add new event
    localStorage.setItem('events', JSON.stringify(events)); // Update storage
    return {
        type: CREATE_EVENT,
        payload: events
    };
}

// UPDATE EVENT ACTION
export function updateEvent(values) {
    let events = getEventsFromStorage();
    let index = _.findIndex(events, { 'id': values.id });
    if (index > -1) {
        events[index] = values; // Update event
        localStorage.setItem('events', JSON.stringify(events)); // Update storage
    }
    return {
        type: UPDATE_EVENT,
        payload: events
    };
}

// DELETE EVENT ACTION
export function deleteEvent(id) {
    let events = getEventsFromStorage();
    let index = _.findIndex(events, { 'id': id });
    if (index > -1) {
        events.splice(index, 1); // Remove event
        localStorage.setItem('events', JSON.stringify(events)); // Update storage
    }
    return {
        type: DELETE_EVENT,
        payload: events
    };
}

// GET ALL PAST EVENTS ACTION
export function pastEvents() {
    let events = getEventsFromStorage();
    events = _.filter(events, (item) => (moment().format('YYYY MM DD') > moment(item.start).format('YYYY MM DD')) ? true : false);
    return {
        type: PAST_EVENTS,
        payload: events
    };
}

// GET ALL UPCOMING EVENTS ACTION
export function upcomingEvents() {
    let events = getEventsFromStorage();
    events = _.filter(events, (item) => (moment().format('YYYY MM DD') < moment(item.start).format('YYYY MM DD')) ? true : false);
    return {
        type: UPCOMING_EVENTS,
        payload: events
    };
}
