import {createBrowserRouter, createdRoutesFromElement, Route} from 'react-router-dom';
import App from "./App";
import Index from './pages/Index';
import Show from './pages/Show';

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