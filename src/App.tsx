import React, {FC, Fragment} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Login from './screens/Login/Login';

const Test: FC = () => {
    return <h1>HEllo???</h1>
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<h1>HEllo???</h1>} />
                <Route path="/dashboard" element={<h1>d???</h1>} />
                <Route path="/b" element={<h1>s???</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
