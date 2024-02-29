import axios from "axios";

const url = "http://localhost:3000/events";

const getallEvents = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

const addEvent = async (event) => {
  event.like = false;
  return await axios.post(url, event);
};

const editEvent = async (id, event) => {
  return await axios.put(`${url}/${id}`, event);
};

const deleteEvent = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export default { getallEvents, addEvent, editEvent, deleteEvent };