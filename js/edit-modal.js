

// In this file we will be handling functions related to modal



var modalEdit = document.getElementById('editModal');


var modalBtnEdit = document.getElementById('btnEdit');


var closeBtnEdit = document.getElementById('closeBtnEdit');


var cancelBtnEdit = document.getElementById('cancel-edit');


modalBtnEdit.addEventListener('click', openEditModal);

closeBtnEdit.addEventListener('click', closeEditModal);

cancelBtnEdit.addEventListener('click', closeEditModal);

window.addEventListener('click', outsideEditModal);

function openEditModal() {
    modalEdit.style.display = 'block';
}

function closeEditModal() {
    modalEdit.style.display = 'none';
}

function outsideEditModal(e) {
    if (e.target == modalEdit) {
        modalEdit.style.display = 'none';
    }
}