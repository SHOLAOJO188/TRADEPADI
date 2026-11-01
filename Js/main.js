// Load the shared navbar
async function loadNavbar() {
    const navbarContainer = document.getElementById("navbar");

    if (!navbarContainer) return;

    try {
        const response = await fetch("components/navbar.html");

        if (!response.ok) {
            throw new Error("Could not load navbar");
        }

        const navbarHTML = await response.text();

        navbarContainer.innerHTML = navbarHTML;

        // Highlight the current page
        const currentPage = window.location.pathname
            .split("/")
            .pop() || "index.html";

        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach(link => {
            if (link.dataset.page === currentPage) {
                link.classList.add("text-[#159A9C]");
                link.classList.remove("text-slate-600");
            }
        });
    } catch (error) {
        console.error("Navbar loading error:", error);
    }
}

loadNavbar();