import axios from "axios";


const ReviewClient = {

    getAllReviews() {
        return axios.get("/api/review")
    },

    getReviewById(id) {
        return axios.get(`/api/review/${id}`)
    },

}

export {ReviewClient}