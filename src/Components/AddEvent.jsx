
import { Button, Container, Form } from "react-bootstrap";
import eventService from "../services/api";
import { useNavigate } from "react-router-dom";
export default function AddEvent() {

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector("form");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.img = data.img.name;
        console.log(data);
        const response = await eventService.addEvent(data);
        console.log(response.data);
        alert("Event added successfully");
        navigate("/events");
    };

    return (
        <Container style={{ marginTop: "30px" }}>
            <h2>Add a new Event to your Event List</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter a Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description "
                        name="description"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbTickets"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbParticipants"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="img"
                    />
                </Form.Group>
                <Button
                    onClick={handleSubmit}
                    variant="primary" >
                    Add an Event
                </Button>
                <Button variant="secondary">
                    Cancel
                </Button>
            </Form>
        </Container>
    );
}