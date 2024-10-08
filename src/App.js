import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageOne from './PageList/PageOne';
import PageTwo from './PageList/PageTwo';
import PageThree from './PageList/PageThree';
import PageFour from './PageList/PageFour';
import PageFive from './PageList/PageFive';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="/page-two" element={<PageTwo />} />
                <Route path="/page-three" element={<PageThree />} />
                <Route path="/page-four" element={<PageFour />} />
                <Route path="/page-five" element={<PageFive />} />
            </Routes>
        </Router>
    );
};

export default App;
