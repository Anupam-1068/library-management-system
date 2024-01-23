import App from "../App.jsx";
import {createBrowserRouter} from "react-router-dom";
import AllBooksView from "../views/BookView/AllBooksView.jsx";
import EditBookView from "../views/BookView/EditBookView.jsx";
import HomePage from "../views/HomePage/HomePage.jsx";
import AllReviewsView from "../views/ReviewView/AllReviewsView.jsx";
import CreateBookView from "../views/BookView/CreateBookView.jsx";

export const Books_VIEW_PATH = "/book";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: Books_VIEW_PATH,
                element: <AllBooksView/>,
            },
            {
                path: "/home",
                element: <HomePage/>,
            },
            {
                path: "/book/:bookId/edit",
                element: <EditBookView/>,
            },
            {
                path: "/createBook",
                element: <CreateBookView/>
            },
            {
                path: "/test",
                element: <div>Router is working</div>,
            },
            {
                path: "/review",
                element: <AllReviewsView/>
            },

        ],
    },

]);


export default router;