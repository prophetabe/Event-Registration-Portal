//U81623325
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const registrationDetails = document.getElementById('registrationDetails');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

       
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventDate = document.getElementById('eventDate').value;
        const mealPreferences = Array.from(document.querySelectorAll('input[name="mealPreference"]:checked')).map(cb => cb.value);

       
        if (!name || !email || !eventDate || mealPreferences.length === 0) {
            alert('Please fill out all fields and select at least one meal preference.');
            return;
        }

        
        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = `
            <h2>Registration Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Event Date:</strong> ${eventDate}</p>
            <p><strong>Meal Preferences:</strong> ${mealPreferences.join(', ')}</p>
        `;
        //Commit: "Implement form validation and submission logic."
        registrationDetails.innerHTML = '';
        registrationDetails.appendChild(detailsDiv);
    });
});
//Commit: "Finalize registration details display functionality."
