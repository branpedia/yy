// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Hide loading screen after 1 second
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// Initialize page
function initializePage() {
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
    }
    // Check for saved mode preference
    if (localStorage.getItem('mode') === 'multiplayer') {
        switchMode('multiplayer');
        document.querySelector('.mode-toggle').textContent = 'Standard Mode';
    }
}

// Set up event listeners
function setupEventListeners() {
    // Nav toggle for mobile
    document.getElementById('navToggle').addEventListener('click', function() {
        document.getElementById('navMenu').classList.toggle('active');
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Mode toggle for multiplayer/standard
    document.getElementById('modeToggle').addEventListener('click', function() {
        const currentMode = localStorage.getItem('mode') === 'multiplayer' ? 'standard' : 'multiplayer';
        switchMode(currentMode);
        this.textContent = currentMode === 'multiplayer' ? 'Standard Mode' : 'Multiplayer Mode';
        localStorage.setItem('mode', currentMode);
    });
    
    // Home link (optional, prevents default behavior)
    document.querySelector('.nav-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    });
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
}

// Switch mode (multiplayer/standard)
function switchMode(mode) {
    const products = document.querySelectorAll('#sewaProducts .product-card');
    products.forEach(card => {
        const img = card.querySelector('.product-image');
        const title = card.querySelector('.product-title');
        const duration = card.querySelector('.product-duration');
        if (mode === 'multiplayer') {
            // Example: Adjust content for multiplayer mode
            if (title.textContent === 'Sewa Bot') {
                img.src = 'https://qu.ax/UKzvO.jpg';
                duration.textContent = 'Multiplayer - ' + duration.textContent;
            } else {
                img.src = 'https://qu.ax/UKzvO.jpg';
                duration.textContent = 'Multiplayer - ' + duration.textContent;
            }
        } else {
            // Revert to standard mode
            if (title.textContent.includes('Sewa Bot')) {
                img.src = 'https://qu.ax/UKzvO.jpg';
                duration.textContent = duration.textContent.replace('Multiplayer - ', '');
            } else {
                img.src = 'https://qu.ax/UKzvO.jpg';
                duration.textContent = duration.textContent.replace('Multiplayer - ', '');
            }
        }
    });
}
