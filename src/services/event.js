// MyService.js
import events from "../data/events.json";

class EventService {
  #events = events;

  getEvents() {
    console.log("events", this.#events);
    return this.#events;
  }

  bookEvent(event) {
    const foundedRvent = this.#events.find((e) => e.name === event.name);
    if (!foundedRvent) {
      throw new Error("Event not found");
    }
    foundedRvent.nbTickets--;
    return foundedRvent;
  }
}

export default new EventService();
