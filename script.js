var button = {
	addelement: function (){
		
		var btn = document.createElement('button');
		btn.textContent = 'click here';
		document.body.appendChild(btn);



		btn.addEventListener('click', function () {
		window.print();
	});
}
};
	
button.addelement();


























