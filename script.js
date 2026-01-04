// Medical Terminology Manager
class MediMap {
    constructor() {
        this.terms = this.loadTerms();
        this.idCounter = this.getNextId();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderTerms();
        this.updateStats();
    }

    getNextId() {
        const maxId = this.terms.length > 0 
            ? Math.max(...this.terms.map(t => t.id))
            : 0;
        return maxId + 1;
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
            id: this.idCounter++,
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

        container.innerHTML = '';
        termsToRender.forEach(term => {
            const card = document.createElement('div');
            card.className = 'term-card';
            
            const header = document.createElement('div');
            header.className = 'term-header';
            
            const title = document.createElement('h3');
            title.className = 'term-name';
            title.textContent = term.name;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => this.deleteTerm(term.id));
            
            header.appendChild(title);
            header.appendChild(deleteBtn);
            
            const categorySpan = document.createElement('span');
            categorySpan.className = `term-category category-${term.category}`;
            categorySpan.textContent = term.category;
            
            const definition = document.createElement('p');
            definition.className = 'term-definition';
            definition.textContent = term.definition;
            
            card.appendChild(header);
            card.appendChild(categorySpan);
            card.appendChild(definition);
            
            container.appendChild(card);
        });
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
