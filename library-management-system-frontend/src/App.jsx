import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./containers/navbar/NavigationBar.jsx";
import {Outlet} from "react-router-dom";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <>
        <NavigationBar></NavigationBar>
        <Container>
            <Outlet />
        </Container>

    </>
  )
}

export default App
