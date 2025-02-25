function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Ensures callback runs after component is loaded
        });
}


// Load header and footer, then execute highlight function after header is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header-placeholder", "../components/header.html");
    loadComponent("footer-placeholder", "../components/footer.html");
});
