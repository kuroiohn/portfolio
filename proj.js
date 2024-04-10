document.addEventListener("DOMContentLoaded", function() {
    // Facebook button click event
    document.getElementById("facebook-btn").addEventListener("click", function() {
        // Replace the URL with your Facebook profile URL
        var facebookUrl = "https://www.facebook.com/dattebayolks";
        window.open(facebookUrl, '_blank'); // Open link in new tab
    });

    // Projects button click event
    document.getElementById("projects-btn").addEventListener("click", function() {
        // Replace "projects-section" with the ID of your projects section
        document.getElementById("projectz").scrollIntoView({ behavior: "smooth" });
    });

    // About Me button click event
    document.getElementById("about-me-btn").addEventListener("click", function() {
        // Replace "about-me-section" with the ID of your about me section
        document.getElementById("about-mes").scrollIntoView({ behavior: "smooth" });
    });
});

