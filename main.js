const COHORT = "2410-FTB-ET-WEB-PT-Brett"
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}`


const state = {
    events: [],
};

// API Data
async function getEvents() {
    try {
        const response = await fetch(`${API_URL}/events`);
        const json = await response.json();
        return events.data;

    } catch (error) {
        console.log('no party, you weenie')
    }
};
getEvents();

const deleteEvent = async (id) => {
    try {
        await fetch(`${API_URL}/events/${id}`, {
            method: 'DELETE',
        });
        await renderPage();
    } catch (e) {
        console.error(`Failed to delete event with ID: ${id}`, e);
    }
};

async function addEvent(event) {
    try {
        const response = await fetch(`${API_URL/events}`, {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(event),
        });
        const json = await response.json();

        if (json.error){
            throw new error(json.error.message);
        }
    } catch (error) {
        console.error(error);
    }
};

async function addEvent(event) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(event),
        });
        const json = await response.json();

        if (json.error) {
            throw new Error(json.error.message);
            }
        } catch (error){
            console.error(error);
        }
};

// Form.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const isoDate = new Date(Form.time.value).toISOString();
//     console.log(Form.time.value);
//     const newEvent = {
//         name: Form.eventName.value,
//         descirption: Form.descirption.value,
//         date: isoDate,
//         location: Form.location.value,
//     };

//     await addEvent(newEvent);
//     renderPage();
// });

// DOM Name Desc Location Date
const createEventItem = (events) => {
    //container - class .event_item
    const eventContainer = document.createElement('div');
    eventContainer.classList.add('event_item');
    //elements
    const eventHeader = document.createElement('h4');
    eventHeader.textContent = event.name;

    const eventDescirption = document.createElement('p');
    eventDescirption.textContent = event.description;

    const eventLocation = document.createElement('span');
    eventLocation.textContent = event.location;

    const eventDate = document.createElement('span');
    eventDate.textContent = event.date;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete event';
    deleteButton.addEventListener('click', () => {
        deleteevent(event.id);
    });

    eventContainer.append(eventHeader, eventDescirption, eventLocation, eventDate, deleteButton);

    return eventContainer;
}

async function renderPage() {
    while (eventContainer.children.length) {
        const child = getEventsContainer.firstChild;
        getEventsContainer.removeChild(child);
    }

    const getEvents = await getEvents();

    state.getEvents = getEvents;

    state.getEvents.forEach((recipe) => {
        const recipeContainer = createRecipeItem(recipe);

        eventContainer.appendChild(recipeContainer);
    });
}

renderPage();