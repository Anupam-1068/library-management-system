import {useEffect, useState} from "react";
import BookCard from "../../components/card/BookCard.jsx";
import {BookClient} from "../../api/BookClientApi.jsx";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AllBooksView() {

    const [books, setBooks] = useState([]);
    const navigate = useNavigate();  // Use useNavigate hook here

    const loadBooks = async () => {
        try {
            const response = await BookClient.getAllBooks();

            // Check if response.data is an array before setting state
            if (Array.isArray(response.data)) {
                setBooks(response.data);
            } else {
                console.error("Data from the API is not an array:", response.data);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    useEffect(() => {
        loadBooks();
    }, [])

    const handleCreateNewBook = () => {
        // Navigate to the page for creating a new book
        navigate("/createBook");
    };

    // eslint-disable-next-line no-import-assign

    return (
        <div className="mt-5">
            {/* Create New Book button outside the map function */}
            <Button variant="primary" onClick={handleCreateNewBook} className="mb-3">
                Create New Book
            </Button>

            {books.map((book) => (
                <div key={`book-${book.id}`} className="mb-3">
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
}


export default AllBooksView;