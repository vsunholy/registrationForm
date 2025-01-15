document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Išvalome klaidų pranešimus
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let valid = true;

    // Vardo validacija
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z]{3,30}$/.test(name)) {
        valid = false;
        document.getElementById('nameError').textContent = 'Name must be 3-30 characters long and contain only letters.';
    }

    // Email validacija
    const email = document.getElementById('email').value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // Gimimo datos validacija
    const dob = document.getElementById('age').value;
    if (!dob) {
        valid = false;
        document.getElementById('ageError').textContent = 'Please select a valid date of birth.';
    } else {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 18 || age > 120) {
            valid = false;
            document.getElementById('ageError').textContent = 'Age must be between 18 and 120.';
        }
    }

    // Telefono numerio validacija
    const phone = document.getElementById('phone').value;
    if (!/^\+\d{3}\d{3}\d{5}$/.test(phone)) {
        valid = false;
        document.getElementById('phoneError').textContent = 'Phone number must be in format +XXX XXX XXXXX.';
    }

    // Slaptažodžio validacija
    const password = document.getElementById('password').value;
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters, with uppercase, lowercase, number, and special character.';
    }

    // Patvirtinimo slaptažodžio validacija
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    }

    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');

    if (valid) {
        modalMessage.textContent = 'Registration successful! U will be redirected to the best website in the world in 2 seconds.';
        modalMessage.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }, 2000);
    } else {
        modalMessage.textContent = 'Registration failed. Please fix the errors and try again.';
        modalMessage.style.color = 'red';
    }

    modal.style.display = 'flex';

    // Uždarymo funkcija
    document.querySelector('.close-button').onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});



const createFlyingText = () => {
    const textElement = document.createElement('div');
    textElement.textContent = 'Working on Friday is a sin';
    textElement.className = 'flying-text';
    document.body.appendChild(textElement);

    const randomX = Math.random() * (window.innerWidth - 200); 
    const randomY = Math.random() * (window.innerHeight - 50); 
    const randomDuration = Math.random() * 5 + 5;

    textElement.style.left = `${randomX}px`;
    textElement.style.top = `${randomY}px`;
    textElement.style.animationDuration = `${randomDuration}s`;

    
    setTimeout(() => {
        textElement.style.opacity = '0'; 
        setTimeout(() => {
            textElement.remove(); 
        }, 1000); 
    }, randomDuration * 1000);
};

setInterval(createFlyingText, 1000);

   
