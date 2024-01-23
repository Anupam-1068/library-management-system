import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";


// eslint-disable-next-line react/prop-types
function BookCard({book}) {
    return (
        <Card>
            <Card.Body>
                {/* eslint-disable-next-line react/prop-types */}
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {/* eslint-disable-next-line react/prop-types */}
                    {book.author}
                </Card.Text>
                <Card.Text>{/* eslint-disable-next-line react/prop-types */}
                    {book.description}</Card.Text>
                {/* eslint-disable-next-line react/prop-types */}
                <NavLink className="nav-link" to={`/book/${book.id}/edit`}>Click to edit</NavLink>
            </Card.Body>
        </Card>
    )
}


export default BookCard;