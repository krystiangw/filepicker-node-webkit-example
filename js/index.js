$(function(){
	$('#pickBtn').click(function(){
		filepicker.setKey("A7DR6BBNQHWM3gRGHknBwz");

		filepicker.pick(
		{
			mimetypes: 'image/*',
			container: 'window'
		},
		function(Blob){
			alert(JSON.stringify(Blob));
		},
		function(FPError){
			alert(FPError.toString());
		}
		);
	});
});