import {Table} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function ReviewTable({ reviews }) {
    // Ensure that reviews is an array before mapping over it
    const reviewsArray = Array.isArray(reviews) ? reviews : [];

    // const reviewsArray = [{"id":1,"userEmail":"user1@example.com","date":"2023-01-01","rating":5.0,"bookId":1,"reviewDescription":"Great book!"},
    //     {"id":2,"userEmail":"user2@example.com","date":"2023-01-02","rating":4.0,"bookId":2,"reviewDescription":"Enjoyed reading it."},
    //     {"id":3,"userEmail":"user3@example.com","date":"2023-01-03","rating":3.0,"bookId":3,"reviewDescription":"Not bad, but could be better"}]
    return (
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>User Email</th>
                <th>Date</th>
                <th>Rating</th>
                <th>BookId</th>
                <th>Review Description</th>
            </tr>
            </thead>
            <tbody>
            {reviewsArray.map((review, index) => (
                <tr key={`review-${index}`}>
                    <td>{review.id}</td>
                    <td>{review.userEmail}</td>
                    <td>{review.date}</td>
                    <td>{review.rating}</td>
                    <td>{review.bookId}</td>
                    <td>{review.reviewDescription}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ReviewTable;
