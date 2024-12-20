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
                window.location.href = "index.html"; // Redirect to the list page
            } else {
                alert("Invalid credentials!");
            }
        });
    }

    // Anime list page functionality
    if (pathname.endsWith("index.html")) {
        // No special functionality needed for now, but this is where you can add dynamic loading.
        console.log("Anime List Page");
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

    // Info page functionality
    if (pathname.endsWith("info.html")) {
        console.log("Info Page Loaded");
        // Add dynamic behaviors if needed.
    }
});
