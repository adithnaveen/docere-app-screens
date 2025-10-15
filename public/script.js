import { initCreateClientForm } from './js/formHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Application loaded successfully!');
    setupNavigationHandlers();
});

function setupNavigationHandlers() {
    // Handle menu item clicks
    document.querySelectorAll('a[data-form]').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const formType = e.target.getAttribute('data-form');
            await loadContent(formType);
        });
    });
}

async function loadContent(formType) {
    const contentArea = document.getElementById('content-area');
    
    switch(formType) {
        case 'create-client':
            try {
                const response = await fetch('/forms/CreateClient.html');
                const html = await response.text();
                contentArea.innerHTML = html;
                initCreateClientForm(); // Initialize form handlers
            } catch (error) {
                console.error('Error loading create client form:', error);
                contentArea.innerHTML = '<div class="alert alert-danger">Error loading form</div>';
            }
            break;
            
        default:
            contentArea.innerHTML = `
                <h1 class="mb-4">Welcome to Docere App Screens</h1>
                <p class="lead">Select an option from the menu to get started</p>
            `;
    }
}