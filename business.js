// =========== SALES MANAGEMENT ===========
function refreshSales() {
    const today = new Date().toDateString();
    const todaySales = sales.filter(sale => new Date(sale.date).toDateString() === today);
    const totalSales = todaySales.reduce((sum, sale) => sum + sale.total, 0);
    
    document.getElementById('today-sales').textContent = formatCurrency(totalSales);
    document.getElementById('sales-count').textContent = todaySales.length;
    document.getElementById('cash-sales-total').textContent = formatCurrency(totalSales);
    
    const container = document.getElementById('sales-list');
    const lang = TRANSLATIONS[currentLanguage];
    
    if (!todaySales.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #666;">
                <div style="font-size: 3rem; margin-bottom: 10px;">💰</div>
                <div style="font-size: 1.1rem;">
                    ${currentLanguage === 'sw' ? 'Hakuna mauzo leo' : 'No sales today'}
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = todaySales.map(sale => `
        <div class="item" onclick="showSaleDetails(${sale.id})">
            <div class="item-info">
                <div class="item-name">${sale.customer}</div>
                <div class="item-detail">
                    ${sale.product} × ${sale.quantity}${sale.unit || ''} | ${sale.time}
                </div>
            </div>
            <div class="item-amount">${formatCurrency(sale.total)}</div>
        </div>
    `).join('');
    
    updateCashCalculation();
}

function quickSale() {
    if (!products.length) {
        alert(
            currentLanguage === 'sw'
                ? 'Ongeza bidhaa kwanza katika kichupo cha "Bidhaa"'
                : 'First add products in the "Products" tab'
        );
        return;
    }
    
    const customer = prompt(
        currentLanguage === 'sw' ? 'Jina la mteja:' : 'Customer name:',
        currentLanguage === 'sw' ? 'Mteja' : 'Customer'
    );
    
    if (!customer) return;
    
    // Simple sale implementation (to be expanded)
    alert('Quick sale functionality to be implemented fully');
}

// =========== CASH MANAGEMENT ===========
function refreshCash() {
    const todaySales = sales.filter(sale => 
        new Date(sale.date).toDateString() === new Date().toDateString()
    );
    const totalSales = todaySales.reduce((sum, sale) => sum + sale.total, 0);
    
    document.getElementById('morning-cash').value = cash.morning || '';
    document.getElementById('expenses').value = cash.expenses || '';
    document.getElementById('cash-sales-total').textContent = formatCurrency(totalSales);
    
    updateCashCalculation();
}

function updateCashCalculation() {
    const morningCash = parseFloat(document.getElementById('morning-cash').value) || 0;
    const todaySales = sales.filter(sale => 
        new Date(sale.date).toDateString() === new Date().toDateString()
    );
    const totalSales = todaySales.reduce((sum, sale) => sum + sale.total, 0);
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    
    const expectedCash = morningCash + totalSales - expenses;
    document.getElementById('expected-cash').textContent = formatCurrency(expectedCash);
}

function saveCash() {
    const morningCash = parseFloat(document.getElementById('morning-cash').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    
    cash = {
        morning: morningCash,
        expenses: expenses,
        lastUpdated: new Date().toISOString()
    };
    
    saveAppData();
    
    alert(
        currentLanguage === 'sw'
            ? '✅ Fedha imehifadhiwa!'
            : '✅ Cash saved!'
    );
}

// =========== DEBT MANAGEMENT ===========
function refreshDebts() {
    const container = document.getElementById('debt-list');
    const lang = TRANSLATIONS[currentLanguage];
    
    if (!debts.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #666;">
                <div style="font-size: 3rem; margin-bottom: 10px;">📝</div>
                <div style="font-size: 1.1rem;">
                    ${currentLanguage === 'sw' ? 'Hakuna madeni' : 'No debts'}
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = debts.map(debt => `
        <div class="item" onclick="showDebtMenu(${debt.id})">
            <div class="item-info">
                <div class="item-name">${debt.customer}</div>
                <div class="item-detail">${debt.date} ${debt.phone ? `| ${debt.phone}` : ''}</div>
            </div>
            <div class="item-amount">${formatCurrency(debt.amount)}</div>
        </div>
    `).join('');
}

function addDebt() {
    const customer = prompt(
        currentLanguage === 'sw' ? 'Jina la mteja:' : 'Customer name:',
        currentLanguage === 'sw' ? 'Mteja' : 'Customer'
    );
    if (!customer) return;
    
    const amount = parseInt(prompt(
        currentLanguage === 'sw' ? 'Kiasi cha deni (TZS):' : 'Debt amount (TZS):',
        "5000"
    )) || 0;
    
    if (!customer || amount <= 0) {
        alert(
            currentLanguage === 'sw'
                ? 'Ingiza jina la mteja na kiasi cha deni'
                : 'Enter customer name and debt amount'
        );
        return;
    }
    
    debts.push({
        id: Date.now(),
        customer: customer,
        amount: amount,
        date: new Date().toLocaleDateString(currentLanguage === 'sw' ? 'sw-TZ' : 'en-TZ')
    });
    
    saveAppData();
    refreshDebts();
    
    alert(
        currentLanguage === 'sw'
            ? `✅ Deni la ${formatCurrency(amount)} limeongezwa kwa ajili ya ${customer}`
            : `✅ ${formatCurrency(amount)} debt added for ${customer}`
    );
}

// =========== BUY LIST ===========
function refreshBuyList() {
    let itemsToBuy = [];
    let totalCost = 0;
    
    products.forEach(product => {
        if (product.quantity <= product.minStock) {
            const needed = product.minStock * 2 - product.quantity;
            const cost = needed * product.cost;
            
            itemsToBuy.push({
                id: product.id,
                name: product.name,
                needed: needed,
                unit: product.unitSymbol,
                current: product.quantity,
                minStock: product.minStock,
                cost: cost
            });
            
            totalCost += cost;
        }
    });
    
    document.getElementById('total-cost').textContent = formatCurrency(totalCost);
    
    const container = document.getElementById('buy-list');
    const lang = TRANSLATIONS[currentLanguage];
    
    if (itemsToBuy.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #666;">
                <div style="font-size: 3rem; margin-bottom: 10px;">✅</div>
                <div style="font-size: 1.1rem;">
                    ${currentLanguage === 'sw' ? 'Huna hitaji la kununua' : 'Nothing to buy now'}
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = itemsToBuy.map(item => `
        <div class="item" onclick="showBuyOptions(${item.id})">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-detail">
                    <strong>${currentLanguage === 'sw' ? 'Sasa:' : 'Now:'} ${item.current}${item.unit}</strong><br>
                    <small style="color: #e74c3c;">
                        ${currentLanguage === 'sw' ? 'Inahitaji:' : 'Need:'} ${item.needed}${item.unit}
                    </small>
                </div>
            </div>
            <div class="item-amount">${formatCurrency(item.cost)}</div>
        </div>
    `).join('');
}

// =========== EXPORT MENU ===========
function exportMenu() {
    alert('Export functionality to be implemented');
}

function quickExpense() {
    alert('Quick expense functionality to be implemented');
}

// =========== INITIALIZATION ===========
// Initialize currency formatter
updateCurrencyFormat();

// Load app data
loadAppData();
