import React from 'react';
import ReactDOM from 'react-dom';
import ClockInOutForm from './components/ClockInOutForm';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import './styles/main.css';

function App() {
    return (
        <div className="app">
            <h1>Employee Time Tracking</h1>
            <ClockInOutForm />
            <LoginForm />
            <AdminDashboard />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));