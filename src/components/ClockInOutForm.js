import React, { useState } from 'react';
import { clockIn, clockOut } from '../services/timeTrackingService';

const ClockInOutForm = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [isClockedIn, setIsClockedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!employeeId) {
            setError('Employee ID is required');
            return;
        }
        setError('');

        if (isClockedIn) {
            clockOut(employeeId)
                .then(() => {
                    setIsClockedIn(false);
                })
                .catch((err) => {
                    setError('Error clocking out: ' + err.message);
                });
        } else {
            clockIn(employeeId)
                .then(() => {
                    setIsClockedIn(true);
                })
                .catch((err) => {
                    setError('Error clocking in: ' + err.message);
                });
        }
    };

    return (
        <div className="clock-in-out-form">
            <h2>{isClockedIn ? 'Clock Out' : 'Clock In'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Employee ID"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                />
                <button type="submit">{isClockedIn ? 'Clock Out' : 'Clock In'}</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default ClockInOutForm;