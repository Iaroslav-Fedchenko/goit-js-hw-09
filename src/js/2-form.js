const form = document.querySelector('.feedback-form');
const Storage_Key = 'feedback-form-state';
const formData = {
    email: '',
    message: '',
};

const savedData = localStorage.getItem(Storage_Key);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;

}

form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (name in formData) {
    formData[name] = value.trim();
localStorage.setItem(Storage_Key, JSON.stringify(formData));
}
});

form.addEventListener('submit', event => {
    
    event.preventDefault();
    const { email, message } = formData;
    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }
        console.log('Submitted data:', formData);
        localStorage.removeItem(Storage_Key);
        form.reset();
        formData.email = '';
        formData.message = '';
    });