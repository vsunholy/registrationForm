document.addEventListener('DOMContentLoaded', () => {
    // Atkurti duomenis iš localStorage puslapiui užsikrovus
    const inputs = document.querySelectorAll('#registrationForm input');
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    // Išsaugoti duomenis į localStorage kiekvieną kartą, kai įvedamas tekstas
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.value);
        });
    });
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Užkirsti kelią formos siuntimui

    // Išvalyti klaidų pranešimus
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let valid = true;

    // Vardo validacija
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z]{3,30}$/.test(name)) {
        valid = false;
        document.getElementById('nameError').textContent = 'Vardas turi būti nuo 3 iki 30 simbolių ilgio ir sudarytas tik iš raidžių.';
    }

    // El. pašto validacija
    const email = document.getElementById('email').value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Įveskite teisingą el. pašto adresą.';
    }

    // Gimimo datos validacija
    const dob = document.getElementById('age').value;
    if (!dob) {
        valid = false;
        document.getElementById('ageError').textContent = 'Pasirinkite galiojančią gimimo datą.';
    } else {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 18 || age > 120) {
            valid = false;
            document.getElementById('ageError').textContent = 'Amžius turi būti nuo 18 iki 120 metų.';
        }
    }

    // Telefono numerio validacija
    const phone = document.getElementById('phone').value;
    if (!/^\+\d{3}\d{3}\d{5}$/.test(phone)) {
        valid = false;
        document.getElementById('phoneError').textContent = 'Telefono numeris turi būti formatu +XXX XXX XXXXX.';
    }

    // Slaptažodžio validacija
    const password = document.getElementById('password').value;
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Slaptažodis turi būti bent 8 simbolių, turėti didžiąją raidę, mažąją raidę, skaičių ir specialų simbolį.';
    }

    // Slaptažodžio patvirtinimo validacija
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Slaptažodžiai nesutampa.';
    }

    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');

    // Jei visi duomenys teisingi
    if (valid) {
        modalMessage.textContent = 'Registracija sėkminga! Po 2 sekundžių būsite nukreipti į geriausią svetainę pasaulyje.';
        modalMessage.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }, 2000);
    } else {
        // Jei yra klaidų
        modalMessage.textContent = 'Registracija nepavyko. Ištaisykite klaidas ir bandykite dar kartą.';
        modalMessage.style.color = 'red';
    }

    modal.style.display = 'flex';

    // Modalinio lango uždarymas
    document.querySelector('.close-button').onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// "Flying Text" animacija
const createFlyingText = () => {
    const textElement = document.createElement('div');
    textElement.textContent = 'Dirbti penktadienį yra nuodėmė';
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

// Animacijos kartojimas kas 1 sekundę
setInterval(createFlyingText, 1000);
