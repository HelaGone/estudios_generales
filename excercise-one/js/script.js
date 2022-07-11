document.addEventListener('DOMContentLoaded', (e) => {
	const btnOpenMenu = document?.getElementById('open_menu');
	if(btnOpenMenu){
		btnOpenMenu.addEventListener('click', (e) =>{
			let drawer = document.getElementById('main_drawer');
			drawer.classList.toggle('opened_menu');
		});
	}
});