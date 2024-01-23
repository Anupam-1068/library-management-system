import axios from "axios";


const BookClient = {
    getAllBooks() {
        return axios.get("/api/book")
    },
    getBookById(id) {
        return axios.get(`/api/book/${id}`)
    },
    createBook(book) {
        return axios.post("/api/book",book)
    },
    updateBook(book) {
        return axios.put(`/api/book/${book.id}`, book)
    },
    deleteBook(id) {
        return axios.delete(`/api/book/${id}`)
    }

}

export {BookClient}