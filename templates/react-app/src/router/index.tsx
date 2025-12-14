import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// @ts-ignore
import Home from '../pages/Wellcome';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
             </Routes>
         </Router>
    );
};

export default AppRouter;
