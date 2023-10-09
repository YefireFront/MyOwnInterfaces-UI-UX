const jordan = document.querySelector('#jordan');
const modal = document.querySelector('.modal');
const closee = document.querySelector('.modal__content--close');

jordan.addEventListener('click',  ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
closee.addEventListener('click',  ()=> {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
})