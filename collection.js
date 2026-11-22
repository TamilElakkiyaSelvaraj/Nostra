// ---------- Mobile menu ----------
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
    navLinks.classList.toggle("open");
}


// ---------- Search + Filters ----------
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product_details");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");

// Current selected filters
let selectedOccasion = "all";
let selectedColor = "all";

function filterProducts() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;

        const matchSearch = name.includes(searchText);
        const matchOccasion = selectedOccasion === "all" || occasion === selectedOccasion;
        const matchColor = selectedColor === "all" || color === selectedColor;

        if (matchSearch && matchOccasion && matchColor) {
            product.style.display = "block";
            visibleCount++;
        } else {
            product.style.display = "none";
        }
    });

    // Show "no results" message and count
    noResults.style.display = visibleCount === 0 ? "block" : "none";
    resultCount.textContent = `Showing ${visibleCount} of ${products.length} products`;
}

// Search while typing
searchInput.addEventListener("input", filterProducts);

// Search button / Enter key (stop page reload)
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    filterProducts();
});

// Sidebar filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const type = button.dataset.type;   // "occasion" or "color"
        const value = button.dataset.value; // "summer", "red", "all"...

        if (type === "occasion") {
            selectedOccasion = value;
        } else {
            selectedColor = value;
        }

        // Highlight only the clicked button in its group
        document.querySelectorAll(`.filter-btn[data-type="${type}"]`).forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        filterProducts();
    });
});

// Show count on page load
filterProducts();
