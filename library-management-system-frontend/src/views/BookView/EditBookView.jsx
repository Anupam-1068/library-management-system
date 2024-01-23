import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Button, Form, } from "react-bootstrap";
import {BookClient} from "../../api/BookClientApi.jsx";
import {Books_VIEW_PATH} from "../../router/router.jsx";

function EditBookView() {

    const routerParams = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({});
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");

    const loadBook = async () => {
        try {
            const response = await BookClient.getBookById(routerParams.bookId);

            // Ensure that the response data is available before updating the state
            if (response.data) {
                setBook(response.data);
                setBookTitle(response.data.title);
                setBookAuthor(response.data.author);
                setBookDescription(response.data.description);
            } else {
                console.error("Invalid response data");
                // Handle the case where the response data is not available
            }
        } catch (error) {
            console.error("Error fetching book:", error);
            // Handle the error (e.g., show an error message)
        }
    }

    const handleSave = async () => {
        const updatedBook = {
            id: book.id,
            title: bookTitle,
            author: bookAuthor,
            description: bookDescription
        };
        setBook(updatedBook);

        // Send the update request to the server
        await BookClient.updateBook(updatedBook);
        navigate(Books_VIEW_PATH);
    };


    const handleTitleInput = (e) => {
        setBookTitle(e.target.value)
    }

    const handleAuthorInput = (e) => {
        setBookAuthor(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        setBookDescription(e.target.value)
    }

    const handleDelete = async () => {
        await BookClient.deleteBook(book.id);
        navigate(Books_VIEW_PATH);
    }


    useEffect(() => {
        loadBook();
    }, [routerParams])

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
                    <Form.Label>Book description</Form.Label>
                    <Form.Control as="textarea" onChange={handleDescriptionInput} value={bookDescription} rows={3} placeholder="Book description" />
                </Form.Group>
                <div className="d-flex justify-content-between" >
                    <Button onClick={handleSave}>Save</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </div>

            </Form>
        </div>
    )
}


export default EditBookView;