// Medical Terminology Manager
class MediMap {
    constructor() {
        this.terms = this.loadTerms();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderTerms();
        this.updateStats();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('termForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTerm();
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterTerms();
        });

        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.filterTerms();
        });

        // Clear all button
        document.getElementById('clearAll').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all medical terms?')) {
                this.clearAllTerms();
            }
        });
    }

    addTerm() {
        const name = document.getElementById('termName').value.trim();
        const definition = document.getElementById('termDefinition').value.trim();
        const category = document.getElementById('termCategory').value;

        if (!name || !definition || !category) {
            alert('Please fill in all fields');
            return;
        }

        const term = {
            id: Date.now(),
            name,
            definition,
            category,
            createdAt: new Date().toISOString()
        };

        this.terms.push(term);
        this.saveTerms();
        this.renderTerms();
        this.updateStats();
        
        // Reset form
        document.getElementById('termForm').reset();
        
        // Show success feedback
        this.showNotification('Term added successfully!');
    }

    deleteTerm(id) {
        if (confirm('Are you sure you want to delete this term?')) {
            this.terms = this.terms.filter(term => term.id !== id);
            this.saveTerms();
            this.renderTerms();
            this.updateStats();
            this.showNotification('Term deleted successfully!');
        }
    }

    clearAllTerms() {
        this.terms = [];
        this.saveTerms();
        this.renderTerms();
        this.updateStats();
        this.showNotification('All terms cleared!');
    }

    filterTerms() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;

        const filtered = this.terms.filter(term => {
            const matchesSearch = term.name.toLowerCase().includes(searchTerm) || 
                                 term.definition.toLowerCase().includes(searchTerm);
            const matchesCategory = categoryFilter === 'all' || term.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });

        this.renderTerms(filtered);
    }

    renderTerms(termsToRender = this.terms) {
        const container = document.getElementById('termsContainer');
        
        if (termsToRender.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>No medical terms found. ${this.terms.length > 0 ? 'Try adjusting your filters.' : 'Start by adding some above!'}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = termsToRender.map(term => `
            <div class="term-card">
                <div class="term-header">
                    <h3 class="term-name">${this.escapeHtml(term.name)}</h3>
                    <button class="delete-btn" onclick="medimap.deleteTerm(${term.id})">Delete</button>
                </div>
                <span class="term-category category-${term.category}">${term.category}</span>
                <p class="term-definition">${this.escapeHtml(term.definition)}</p>
            </div>
        `).join('');
    }

    updateStats() {
        const totalTerms = this.terms.length;
        const uniqueCategories = new Set(this.terms.map(term => term.category)).size;

        document.getElementById('totalTerms').textContent = totalTerms;
        document.getElementById('categoryCount').textContent = uniqueCategories;
    }

    saveTerms() {
        localStorage.setItem('medimap-terms', JSON.stringify(this.terms));
    }

    loadTerms() {
        const stored = localStorage.getItem('medimap-terms');
        return stored ? JSON.parse(stored) : this.getDefaultTerms();
    }

    getDefaultTerms() {
        // Some example medical terms to start with
        return [
            {
                id: 1,
                name: 'Cardiology',
                definition: 'The branch of medicine that deals with diseases and abnormalities of the heart.',
                category: 'specialty',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Hypertension',
                definition: 'Abnormally high blood pressure, especially in the arteries, often associated with increased risk of heart disease and stroke.',
                category: 'disease',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Electrocardiogram (ECG)',
                definition: 'A test that measures the electrical activity of the heart to detect heart problems.',
                category: 'procedure',
                createdAt: new Date().toISOString()
            }
        ];
    }

    showNotification(message) {
        // Simple notification implementation
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the application
const medimap = new MediMap();
