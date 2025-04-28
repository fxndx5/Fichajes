import React, { useEffect, useState } from 'react';
import { getTimeTrackingHistory } from '../services/timeTrackingService';

const AdminDashboard = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const data = await getTimeTrackingHistory();
            setHistory(data);
        };

        fetchHistory();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Employee Time Tracking History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Clock In</th>
                        <th>Clock Out</th>
                        <th>Total Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((record, index) => (
                        <tr key={index}>
                            <td>{record.employeeId}</td>
                            <td>{record.clockIn}</td>
                            <td>{record.clockOut}</td>
                            <td>{record.totalHours}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;