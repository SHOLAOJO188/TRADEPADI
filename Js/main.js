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

        // --- MOBILE MENU LOGIC ---
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const menuSpans = menuBtn ? menuBtn.querySelectorAll("span") : [];

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener("click", () => {
                const isOpen = !mobileMenu.classList.contains("hidden");

                // Toggle the menu visibility
                mobileMenu.classList.toggle("hidden");

                // Animate the hamburger lines
                if (!isOpen) {
                    // Turn into X
                    menuSpans[0].style.transform = "translateY(8px) rotate(45deg)";
                    menuSpans[1].style.opacity = "0";
                    menuSpans[2].style.transform = "translateY(-8px) rotate(-45deg)";
                } else {
                    // Revert back to hamburger
                    menuSpans[0].style.transform = "none";
                    menuSpans[1].style.opacity = "1";
                    menuSpans[2].style.transform = "none";
                }
            });
        }


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

async function loadFooter() {
    const footerContainer = document.getElementById("footer");

    if (!footerContainer) return;

    try {
        const response = await fetch("components/footer.html");

        if (!response.ok) {
            throw new Error("Could not load footer");
        }

        footerContainer.innerHTML = await response.text();

    } catch (error) {
        console.error("Footer loading error:", error);
    }
}

// Call the functions
loadNavbar();
loadFooter();