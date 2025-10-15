// Form event handlers
export function initCreateClientForm() {
    const form = document.getElementById('createClientForm');
    if (form) {
        form.addEventListener('submit', handleCreateClient);
        form.addEventListener('reset', handleResetForm);
    }
}

function handleCreateClient(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('clientName').value,
        email: document.getElementById('clientEmail').value,
        phone: document.getElementById('clientPhone').value,
        address: document.getElementById('clientAddress').value
    };
    
    console.log('Creating client:', formData);
    // TODO: Add API call to create client
}

function handleResetForm() {
    console.log('Form reset');
}