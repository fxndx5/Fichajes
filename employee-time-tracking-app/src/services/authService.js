export const login = async (email, password) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};