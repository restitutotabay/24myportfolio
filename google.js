const scriptURL = 'https://script.google.com/macros/s/AKfycbypM46QAj7K-uRH-HqNhO0DU_WH2gl_10WHY2YXjtznlushS2nSydxxieRkuKl42FHw/exec';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['contact-form'];

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            console.log('Form submission initiated.');

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    if (response.ok) {
                        alert("Thank you! Your form is submitted successfully.");
                        console.log('Form submitted successfully.');
                    } else {
                        console.error('Form submission failed:', response.status, response.statusText);
                        alert('Form submission failed. Please try again.');
                    }
                })
                .then(() => {
                    console.log('Reloading the page.');
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('An error occurred during form submission. Please try again.');
                });
        });
    } else {
        console.error('Form not found!');
    }
});