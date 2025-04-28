export const clockIn = async (employeeId) => {
    const response = await fetch('/api/clock-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId }),
    });
    if (!response.ok) {
        throw new Error('Failed to clock in');
    }
    return await response.json();
};

export const clockOut = async (employeeId) => {
    const response = await fetch('/api/clock-out', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId }),
    });
    if (!response.ok) {
        throw new Error('Failed to clock out');
    }
    return await response.json();
};

export const getTimeRecords = async (employeeId) => {
    const response = await fetch(`/api/time-records/${employeeId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch time records');
    }
    return await response.json();
};