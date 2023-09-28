import {createBrowserRouter, createdRoutesFromElement, Router} from 'react-router-dom';
import App from "./App";

const router = createBrowserRouter(createdRoutesFromElement(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} />
            <Route path=":id" element={<Show/>} />
            <Route path="create" />
            <Route path="update/:id" />
            <Route path="delete/:id" />
        </Route>
    </>
));

export default router;