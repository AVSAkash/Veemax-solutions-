// =========================================
// VEEMAX Products Page
// =========================================

// ---------- DOM ----------
const productsGrid = document.getElementById("productsGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const productCount = document.getElementById("productCount");

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

// ---------- State ----------
let currentCategory = "All";
let searchText = "";

// =========================================
// Render Products
// =========================================

function renderProducts() {

    let filtered = products.filter(product => {

        const matchCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        const search = searchText.toLowerCase();

        const matchSearch =

            product.name.toLowerCase().includes(search) ||

            product.category.toLowerCase().includes(search) ||

            product.description.toLowerCase().includes(search);

        return matchCategory && matchSearch;

    });

    // Featured first, then alphabetical

    filtered.sort((a, b) => {

        if (a.featured !== b.featured) {

            return Number(b.featured) - Number(a.featured);

        }

        return a.name.localeCompare(b.name);

    });

    productCount.textContent =
        `Showing ${filtered.length} of ${products.length} Products`;

    if (filtered.length === 0) {

        productsGrid.innerHTML = `

            <div class="no-products">

                <i class="fa-solid fa-box-open"></i>

                <h2>No Products Found</h2>

                <p>Try another keyword or category.</p>

            </div>

        `;

        return;

    }

    let html = "";

    filtered.forEach(product => {

        html += `

        <div class="product-card">

            <div class="product-image">

                <img

                    src="${product.image}"

                    alt="${product.name}"

                    loading="lazy"

                    onerror="this.src='images/no-image.png'">

            </div>

            <div class="product-content">

                <span class="product-category">

                    ${product.category}

                </span>
                ${product.featured ? `

                <span class="featured-badge">

                    ⭐

                </span>

                ` : ""}
                <h3>${product.name}</h3>

                <p class="product-desc">

                    ${product.description}

                </p>

                <button

                    class="product-btn view-product"

                    data-id="${product.id}">

                    View Details

                </button>

            </div>

        </div>

        `;

    });

    productsGrid.innerHTML = html;

}

// =========================================
// Categories
// =========================================

function renderCategories() {

    const categories = [

        "All",

        ...new Set(products.map(p => p.category))

    ];

    let html = "";

    categories.forEach(category => {

        html += `

        <button

            class="category-btn ${category === currentCategory ? "active" : ""}"

            data-category="${category}">

            ${category}

        </button>

        `;

    });

    categoryFilters.innerHTML = html;

}

// =========================================
// Category Click
// =========================================

categoryFilters.addEventListener("click", e => {

    const button = e.target.closest(".category-btn");

    if (!button) return;

    currentCategory = button.dataset.category;

    renderCategories();

    renderProducts();

});

// =========================================
// Search
// =========================================

let searchTimer;

searchInput.addEventListener("input", e => {

    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {

        searchText = e.target.value.trim().toLowerCase();

        renderProducts();

    }, 250);

});

// =========================================
// Modal
// =========================================

function openModal(product) {

    modalImage.src = product.image;

    modalTitle.textContent = product.name;

    modalCategory.textContent = product.category;

    modalDescription.textContent = product.description;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeProductModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}

// =========================================
// Product Click (Event Delegation)
// =========================================

productsGrid.addEventListener("click", e => {

    const button = e.target.closest(".view-product");

    if (!button) return;

    const product = products.find(

        p => p.id === Number(button.dataset.id)

    );

    if (!product) return;

    openModal(product);

});

// =========================================
// Close Modal
// =========================================

closeModal.addEventListener("click", closeProductModal);

window.addEventListener("click", e => {

    if (e.target === modal) {

        closeProductModal();

    }

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeProductModal();

    }

});

// =========================================
// Initialize
// =========================================

renderCategories();

renderProducts();