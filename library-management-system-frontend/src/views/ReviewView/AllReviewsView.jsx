import ReviewTable from "../../components/table/ReviewTable.jsx";
import { useEffect, useState } from 'react';
import { ReviewClient } from '../../api/ReviewClientApi.jsx';

function AllReviewsView() {
    const [reviews, setReviews] = useState([]);

    const loadReviews = async () => {
        try {
            const response = await ReviewClient.getAllReviews();

            // Check if response.data is an array before setting state
            if (Array.isArray(response.data)) {
                setReviews(response.data);
            } else {
                console.error('Data from the API is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        loadReviews();
    }, []);


    return (
        <div className="mt-5">
            <ReviewTable reviews={reviews} />
        </div>
    );
}

export default AllReviewsView;
