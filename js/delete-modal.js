

// In this file we will deal with the delete modal and its functionality

var modalDelete = document.getElementById('deleteModal');

var modalBtnDelete = document.getElementById('btnDelete');

var closeBtnDelete = document.getElementById('closeBtnDelete');
modalBtnDelete.addEventListener('click', openEditModal);

closeBtnDelete.addEventListener('click', closeEditModal);
window.addEventListener('click', outsideEditModal);

function openEditModal() {
    modalDelete.style.display = 'block';
}

function closeEditModal() {
    modalDelete.style.display = 'none';
}

function outsideEditModal(e) {
    if (e.target == modalDelete) {
        modalDelete.style.display = 'none';
    }
}