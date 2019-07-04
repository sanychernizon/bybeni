let btnAddProduct = document.querySelector('.btn-add-product');
let btnCloseModal = document.querySelector('#btn-close-modal');
let modalAddProduct = document.querySelector('#modal-add-product');

function showModal() {
    modalAddProduct.classList = 'modal is-active'
}

function hideModal() {
    modalAddProduct.classList = 'modal'
}

btnAddProduct.addEventListener('click', showModal);
btnCloseModal.addEventListener('click', hideModal);

console.log(btnAddProduct, modalAddProduct, btnCloseModal)