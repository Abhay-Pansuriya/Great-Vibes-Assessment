import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from "react-hot-toast";
import "./index.css";
import JobState from './Context/JobState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <JobState>
            <App />
            <Toaster />
        </JobState>
    </div>
);