document.addEventListener('DOMContentLoaded', () => {
    const clockInOutForm = document.getElementById('clockInOutForm');
    const loginForm = document.getElementById('loginForm');

    if (clockInOutForm) {
        clockInOutForm.addEventListener('submit', handleClockInOut);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

function handleClockInOut(event) {
    event.preventDefault();
    const employeeId = document.getElementById('employeeId').value;

    if (validateEmployeeId(employeeId)) {
        // Call the time tracking service to clock in/out
        // timeTrackingService.clockInOut(employeeId)
        //     .then(response => {
        //         // Handle successful clock in/out
        //     })
        //     .catch(error => {
        //         // Handle error
        //     });
    } else {
        alert('Please enter a valid Employee ID.');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Call the auth service to log in
    // authService.login(email, password)
    //     .then(response => {
    //         // Handle successful login
    //     })
    //     .catch(error => {
    //         // Handle error
    //     });
}

function validateEmployeeId(id) {
    return id && id.trim().length > 0; 
}