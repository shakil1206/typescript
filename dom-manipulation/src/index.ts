const from = document.querySelector('.user-from') as HTMLFormElement;

const userName = document.querySelector('#name') as HTMLFormElement;
const userEmail = document.querySelector('#email') as HTMLFormElement;
const userCountry = document.querySelector('#country') as HTMLFormElement;

from.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value
    }
    console.log(data)
})