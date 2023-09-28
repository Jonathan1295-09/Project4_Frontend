import {createBrowserRouter, createdRoutesFromElement, Router} from 'react-router-dom';
import App from "./App";

const router = createBrowserRouter(createdRoutesFromElement(
    <>
        <Router path="/" element={<App/>}>
            
        </Router>
    </>
));

export default router;