//LOGIN MODAL
export function modalToggle(buttonClass, modalClass) {
	$(buttonClass).on('click', function() {
		$(modalClass).modal('show');
	});  
}
