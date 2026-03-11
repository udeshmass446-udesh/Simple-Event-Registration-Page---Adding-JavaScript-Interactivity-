document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page refresh aagama thadukum [cite: 308, 353]

    let isValid = true;
    const fields = ['name', 'email', 'phone', 'event', 'confirm'];
    
    // 1. Validation Logic [cite: 242, 342]
    fields.forEach(id => {
        const input = document.getElementById(id);
        const error = document.getElementById(id + 'Error');
        
        if (id === 'confirm' ? !input.checked : !input.value) {
            input.style.borderColor = "#ff4d4d";
            isValid = false;
        } else {
            input.style.borderColor = "#00d2ff";
        }
    });

    if (isValid) {
        // 2. Dynamic Table Update [cite: 260, 351]
        const table = document.getElementById('participantTable').querySelector('tbody');
        const row = table.insertRow();
        row.style.animation = "slideIn 0.5s ease";
        
        row.innerHTML = `
            <td>${document.getElementById('name').value}</td>
            <td>${document.getElementById('event').value}</td>
            <td>Online</td>
            <td><button class="glow-btn" style="padding:5px 10px; font-size:12px; background:#ff4d4d; box-shadow:none;" onclick="this.parentElement.parentElement.remove(); updateCount();">Delete</button></td>
        `;

        // 3. Success Message & Reset [cite: 285, 355, 357]
        updateCount();
        const msg = document.getElementById('success-message');
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 3000);
        
        this.reset();
        document.querySelectorAll('input').forEach(i => i.style.borderColor = "");
    }
});

function updateCount() {
    document.getElementById('count').innerText = document.getElementById('participantTable').rows.length - 1;
}################3
