const jordan = document.querySelector('#jordan');
const modal = document.querySelector('.modal');

jordan.addEventListener('click',  ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})