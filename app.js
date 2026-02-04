// =========== APP CONFIGURATION ===========
const CONFIG = {
    appName: "BizBook",
    version: "2.0.0",
    defaultLanguage: "en",
    currency: "TZS"
};

// =========== TRANSLATION SYSTEM ===========
const TRANSLATIONS = {
    en: {
        // App headers
        "app-title": "BizBook",
        "app-subtitle": "Business Ledger for Shops",
        
        // Tabs
        "tab-products": "Products",
        "tab-sales": "Sales", 
        "tab-cash": "Cash",
        "tab-debts": "Debts",
        "tab-buy": "Buy",
        
        // Card titles
        "products-title": "📦 Your Products",
        "sales-title": "💰 Today's Sales",
        "cash-title": "🏦 Cash Box",
        "debts-title": "📝 Money Owed",
        "buy-title": "🚚 Need to Buy",
        
        // Labels
        "today-sales-label": "Today's Sales",
        "customers-label": "Customers",
        "cash-sales-label": "Today's Sales",
        "evening-cash-label": "Evening Cash",
        "approx-cost-label": "Approx Cost",
        
        // Buttons
        "add-product-btn": "+ Add Product",
        "save-cash-btn": "💾 Save Cash",
        "add-debt-btn": "➕ Add Debt",
        "create-order-btn": "📱 Create Order",
        "quick-sale-btn": "💰 Quick Sale",
        "quick-expense-btn": "📝 Expense",
        "export-btn": "📤 Export",
        
        // Modal
        "modal-title": "Add Product",
        "step2-question": "How is this product sold?",
        "step3-question": "Select measurement unit",
        "next-step1-btn": "Next →",
        "next-step2-btn": "Next →",
        "next-step3-btn": "Next →",
        "save-product-btn": "💾 Save Product",
        
        // Product type options
        "option-weight": "Weight",
        "option-volume": "Volume",
        "option-pieces": "Pieces",
        "option-length": "Length",
        "option-packaging": "From Packaging",
        "option-other": "Other",
        
        // Subtype options (populated dynamically)
        "unit-kg": "Kilos",
        "unit-g": "Grams",
        "unit-tonne": "Tonnes",
        "unit-liter": "Liters",
        "unit-ml": "Milliliters",
        "unit-pc": "Pieces",
        "unit-pair": "Pairs",
        "unit-set": "Sets",
        "unit-meter": "Meters",
        "unit-yard": "Yards",
        "unit-carton": "Cartons",
        "unit-strip": "Strips",
        "unit-bottle": "Bottles",
        "unit-sack": "Sacks",
        "unit-custom": "Custom",
        
        // Placeholders
        "placeholder-product-name": "Product Name",
        "placeholder-morning-cash": "Morning Cash",
        "placeholder-expenses": "Today's Expenses"
    },
    
    sw: {
        // App headers
        "app-title": "BizBook",
        "app-subtitle": "Mfumo wa Biashara kwa Maduka",
        
        // Tabs
        "tab-products": "Bidhaa",
        "tab-sales": "Mauzo", 
        "tab-cash": "Fedha",
        "tab-debts": "Madeni",
        "tab-buy": "Kununua",
        
        // Card titles
        "products-title": "📦 Bidhaa Zako",
        "sales-title": "💰 Mauzo ya Leo",
        "cash-title": "🏦 Sanduku la Fedha",
        "debts-title": "📝 Madeni",
        "buy-title": "🚚 Inahitaji Kununuliwa",
        
        // Labels
        "today-sales-label": "Mauzo ya Leo",
        "customers-label": "Wateja",
        "cash-sales-label": "Mauzo ya Leo",
        "evening-cash-label": "Fedha Jioni",
        "approx-cost-label": "Gharama ya Takribani",
        
        // Buttons
        "add-product-btn": "+ Ongeza Bidhaa",
        "save-cash-btn": "💾 Hifadhi Fedha",
        "add-debt-btn": "➕ Ongeza Deni",
        "create-order-btn": "📱 Tengeneza Agizo",
        "quick-sale-btn": "💰 Mauzo Haraka",
        "quick-expense-btn": "📝 Matumizi",
        "export-btn": "📤 Toa Ripoti",
        
        // Modal
        "modal-title": "Ongeza Bidhaa",
        "step2-question": "Bidhaa hii inauzwa vipi?",
        "step3-question": "Chagua kipimo",
        "next-step1-btn": "Endelea →",
        "next-step2-btn": "Endelea →",
        "next-step3-btn": "Endelea →",
        "save-product-btn": "💾 Hifadhi Bidhaa",
        
        // Product type options
        "option-weight": "Uzito",
        "option-volume": "Kiasi",
        "option-pieces": "Vipande",
        "option-length": "Urefu",
        "option-packaging": "Kutoka Kwenye Mfuko",
        "option-other": "Zingine",
        
        // Subtype options
        "unit-kg": "Kilo",
        "unit-g": "Gramu",
        "unit-tonne": "Tani",
        "unit-liter": "Lita",
        "unit-ml": "Mililita",
        "unit-pc": "Vipande",
        "unit-pair": "Jozi",
        "unit-set": "Seti",
        "unit-meter": "Meta",
        "unit-yard": "Yadi",
        "unit-carton": "Kartoni",
        "unit-strip": "Mstari",
        "unit-bottle": "Chupa",
        "unit-sack": "Mfuko",
        "unit-custom": "Vinginevyo",
        
        // Placeholders
        "placeholder-product-name": "Jina la Bidhaa",
        "placeholder-morning-cash": "Fedha Asubuhi",
        "placeholder-expenses": "Matumizi ya Leo"
    }
};

// =========== PRODUCT TYPE DEFINITIONS ===========
const PRODUCT_TYPES = {
    weight: {
        name: "Weight",
        units: [
            { id: "kg", name: "Kilos", symbol: "kg" },
            { id: "g", name: "Grams", symbol: "g" },
            { id: "tonne", name: "Tonnes", symbol: "tonne" }
        ],
        template: `
            <input type="number" id="product-quantity" placeholder="Current Quantity" step="0.01">
            <input type="number" id="product-price" placeholder="Price per unit (TZS)" step="1">
            <input type="number" id="product-cost" placeholder="Cost per unit (TZS)" step="1">
            <input type="number" id="product-minstock" placeholder="Minimum Stock Level" step="0.01">
        `
    },
    
    volume: {
        name: "Volume",
        units: [
            { id: "liter", name: "Liters", symbol: "L" },
            { id: "ml", name: "Milliliters", symbol: "ml" }
        ],
        template: `
            <input type="number" id="product-quantity" placeholder="Current Quantity" step="0.01">
            <input type="number" id="product-price" placeholder="Price per unit (TZS)" step="1">
            <input type="number" id="product-cost" placeholder="Cost per unit (TZS)" step="1">
            <input type="number" id="product-minstock" placeholder="Minimum Stock Level" step="0.01">
        `
    },
    
    pieces: {
        name: "Pieces",
        units: [
            { id: "pc", name: "Pieces", symbol: "pcs" },
            { id: "pair", name: "Pairs", symbol: "pairs" },
            { id: "set", name: "Sets", symbol: "sets" }
        ],
        template: `
            <input type="number" id="product-quantity" placeholder="Current Quantity" step="1">
            <input type="number" id="product-price" placeholder="Price per unit (TZS)" step="1">
            <input type="number" id="product-cost" placeholder="Cost per unit (TZS)" step="1">
            <input type="number" id="product-minstock" placeholder="Minimum Stock Level" step="1">
        `
    },
    
    length: {
        name: "Length",
        units: [
            { id: "meter", name: "Meters", symbol: "m" },
            { id: "yard", name: "Yards", symbol: "yd" }
        ],
        template: `
            <input type="number" id="product-quantity" placeholder="Current Quantity" step="0.01">
            <input type="number" id="product-price" placeholder="Price per unit (TZS)" step="1">
            <input type="number" id="product-cost" placeholder="Cost per unit (TZS)" step="1">
            <input type="number" id="product-minstock" placeholder="Minimum Stock Level" step="0.01">
        `
    },
    
    packaging: {
        name: "From Packaging",
        units: [
            { id: "carton", name: "Cartons", symbol: "carton" },
            { id: "strip", name: "Strips", symbol: "strip" },
            { id: "bottle", name: "Bottles", symbol: "bottle" },
            { id: "sack", name: "Sacks", symbol: "sack" }
        ],
        template: `
            <div style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 5px;">
                <div style="font-weight: 600; margin-bottom: 5px;">Packaging Information</div>
                <div style="font-size: 0.9rem; color: #666;">Items are bought in bulk and sold individually</div>
            </div>
            <input type="number" id="package-size" placeholder="Items per package" step="1">
            <input type="number" id="package-cost" placeholder="Cost per package (TZS)" step="1">
            <input type="number" id="product-quantity" placeholder="Total items in stock" step="1">
            <input type="number" id="product-price" placeholder="Price per item (TZS)" step="1">
            <input type="number" id="product-minstock" placeholder="Minimum items before reorder" step="1">
        `
    },
    
    other: {
        name: "Other",
        units: [
            { id: "custom", name: "Custom Unit", symbol: "" }
        ],
        template: `
            <input type="text" id="custom-unit" placeholder="Unit name (e.g., bunch, bundle)">
            <input type="number" id="product-quantity" placeholder="Current Quantity" step="0.01">
            <input type="number" id="product-price" placeholder="Price per unit (TZS)" step="1">
            <input type="number" id="product-cost" placeholder="Cost per unit (TZS)" step="1">
            <input type="number" id="product-minstock" placeholder="Minimum Stock Level" step="0.01">
        `
    }
};

// =========== STATE MANAGEMENT ===========
let currentLanguage = CONFIG.defaultLanguage;
let currentProductType = null;
let currentProductSubtype = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
    initTabSystem();
    initProductModal();
    loadAppData();
});

// =========== LANGUAGE SYSTEM ===========
function initLanguageSystem() {
    // Set initial language
    const savedLang = localStorage.getItem('bizbook_language');
    if (savedLang && TRANSLATIONS[savedLang]) {
        currentLanguage = savedLang;
    }
    
    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            if (lang !== currentLanguage && TRANSLATIONS[lang]) {
                switchLanguage(lang);
            }
        });
    });
    
    // Apply initial translations
    updateUIText();
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('bizbook_language', lang);
    
    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all text
    updateUIText();
    
    // Refresh product modal if open
    if (currentProductType) {
        updateProductModalText();
    }
}

function updateUIText() {
    const lang = TRANSLATIONS[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[id]').forEach(element => {
        const key = element.id;
        if (lang[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = lang[key];
            } else {
                element.textContent = lang[key];
            }
        }
    });
    
    // Update currency formatting
    updateCurrencyFormat();
}

function updateProductModalText() {
    const lang = TRANSLATIONS[currentLanguage];
    const modal = document.getElementById('product-modal');
    
    if (!modal) return;
    
    // Update modal title
    const title = modal.querySelector('.modal-title');
    if (title && lang['modal-title']) {
        title.textContent = lang['modal-title'];
    }
    
    // Update step questions
    const step2Q = modal.querySelector('#step2-question');
    const step3Q = modal.querySelector('#step3-question');
    
    if (step2Q && lang['step2-question']) step2Q.textContent = lang['step2-question'];
    if (step3Q && lang['step3-question']) step3Q.textContent = lang['step3-question'];
    
    // Update button texts
    const buttons = ['next-step1-btn', 'next-step2-btn', 'next-step3-btn', 'save-product-btn'];
    buttons.forEach(btnId => {
        const btn = modal.querySelector(`#${btnId}`);
        if (btn && lang[btnId]) {
            btn.textContent = lang[btnId];
        }
    });
    
    // Update product type options
    const options = ['option-weight', 'option-volume', 'option-pieces', 'option-length', 'option-packaging', 'option-other'];
    options.forEach(optId => {
        const spans = modal.querySelectorAll(`#${optId}`);
        spans.forEach(span => {
            if (span && lang[optId]) {
                span.textContent = lang[optId];
            }
        });
    });
    
    // Update subtype options
    updateSubtypeOptionsText();
}

function updateSubtypeOptionsText() {
    const lang = TRANSLATIONS[currentLanguage];
    const options = document.querySelectorAll('#subtype-options .option-btn span');
    
    options.forEach(span => {
        const key = span.id;
        if (key && lang[key]) {
            span.textContent = lang[key];
        }
    });
}

function updateCurrencyFormat() {
    // Set currency formatting based on language
    const formatter = new Intl.NumberFormat(currentLanguage === 'sw' ? 'sw-TZ' : 'en-TZ', {
        style: 'currency',
        currency: 'TZS',
        minimumFractionDigits: 0
    });
    
    window.formatCurrency = function(amount) {
        return formatter.format(amount);
    };
}

// =========== TAB SYSTEM ===========
function initTabSystem() {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update tab buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            
            // Refresh tab data
            switch(tabId) {
                case 'products': refreshProducts(); break;
                case 'sales': refreshSales(); break;
                case 'cash': refreshCash(); break;
                case 'debts': refreshDebts(); break;
                case 'buy': refreshBuyList(); break;
            }
        });
    });
                              }
