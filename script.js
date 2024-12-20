document.addEventListener("DOMContentLoaded", () => {
    const pathname = window.location.pathname;

    // Login page functionality
    if (pathname.endsWith("login.html")) {
        const loginForm = document.getElementById("login-form");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "password") {
                alert("Login successful!");
                localStorage.setItem("loggedIn", "true");
                window.location.href = "index.html"; // Redirect to the index page
            } else {
                alert("Invalid credentials!");
            }
        });
    }

    // Add event listeners to buttons for navigation
    const navButtons = document.querySelectorAll('button[data-page]');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            window.location.href = page;
        });
    });

    // Add event listener to logo for navigation to home page
    const logoButton = document.querySelector('.logo');
    if (logoButton) {
        logoButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Check login state on index page
    if (pathname.endsWith("index.html")) {
        const loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn === "true") {
            const loginButton = document.querySelector('.header-btn');
            loginButton.textContent = "Logged In";
            loginButton.disabled = true; // Optionally disable the button
        }

        // Add event listener to search input
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                window.location.href = 'List.html'; // Redirect to the list page
            }
        });

        console.log("Anime List Page");
    }

    // Info page functionality
    if (pathname.endsWith("info.html")) {
        const playButton = document.getElementById('play-button');
        playButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'play.html';
        });
    }

    // Play page functionality
    if (pathname.endsWith("play.html")) {
        const video = document.getElementById("anime-video");
        const playButton = document.getElementById("play-btn");
        const pauseButton = document.getElementById("pause-btn");
        const fullscreenButton = document.getElementById("fullscreen-btn");

        playButton.addEventListener("click", () => video.play());
        pauseButton.addEventListener("click", () => video.pause());
        fullscreenButton.addEventListener("click", () => {
            if (video.requestFullscreen) video.requestFullscreen();
            else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
            else if (video.msRequestFullscreen) video.msRequestFullscreen();
        });
    }

    // Add event listeners to anime items for navigation
    const animeItems = document.querySelectorAll('.anime-item');
    animeItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            window.location.href = page;
        });
    });
});
