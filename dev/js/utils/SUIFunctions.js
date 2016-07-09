//LOGIN MODAL
export function loginModal() {
	$('.loginContainer button').on('click', function() {
		$('.loginForm').modal('show');
	});  
}
