export const validateEmployeeId = (id) => {
    const idPattern = /^[0-9]{1,5}$/; // Assuming employee ID is a numeric value with up to 5 digits
    return idPattern.test(id);
};

export const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatDate = (date) => {
    return date.toLocaleDateString();
};

export const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};