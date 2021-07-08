
// In this file we will fetch the database from SQLYog and will show then in the UI



var modal = document.getElementById('addModal');

var modalBtn = document.getElementById('btnAdd');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

var cancelBtn = document.getElementById('cancel');

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

cancelBtn.addEventListener('click', closeModal);


// Database connection starts here
// Listen for outside Modal
window.addEventListener('click', outsideModal);

(
	function () {
		fetch('http://localhost:8080/H2HBABBA1464/fetch')
			.then(response => {
				return response.json();
			})
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.error(error);
			})
	}
)()

function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function outsideModal(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}