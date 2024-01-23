import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { BookClient } from "../../api/BookClientApi.jsx";
import { Button, Form } from "react-bootstrap";
import {Books_VIEW_PATH} from "../../router/router.jsx";

function CreateBookView() {
    const navigate = useNavigate();

    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");

    const handleCreateNewBook = async () => {
        // Basic form validation
        if (!bookTitle || !bookAuthor || !bookDescription) {
            console.error("Please fill in all fields");
            return;
        }

        const newBook = {
            title: bookTitle,
            author: bookAuthor,
            description: bookDescription,
        };

        try {
            // Send a request to create and save the new book
            const createdBook = await BookClient.createBook(newBook);

            // After successful creation, navigate to the view of the created book
            // navigate(`/book/${createdBook.id}`);
            navigate(Books_VIEW_PATH);
            // Clear form fields after successful creation
            setBookTitle("");
            setBookAuthor("");
            setBookDescription("");
        } catch (error) {
            console.error("Error creating new book:", error);
            // Handle the error (e.g., show an error message)
        }
    };

    const handleTitleInput = (e) => {
        setBookTitle(e.target.value);
    };

    const handleAuthorInput = (e) => {
        setBookAuthor(e.target.value);
    };

    const handleDescriptionInput = (e) => {
        setBookDescription(e.target.value);
    };

    return (
        <div className="mt-5">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" onChange={handleTitleInput} value={bookTitle} placeholder="Book Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control type="text" onChange={handleAuthorInput} value={bookAuthor} placeholder="Book Author" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control as="textarea" onChange={handleDescriptionInput} value={bookDescription} rows={3} placeholder="Book Description" />
                </Form.Group>
                <div>
                    <Button onClick={handleCreateNewBook}>Save</Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateBookView;

