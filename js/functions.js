// funcao para visualizar imagem
$(document).ready(function(){
  $(".image").click(function(){
   $(this).toggleClass("imgViewer");
  });
});
// funcao para o haburguer menu
$(document).ready(function() {
	$(document).delegate('.open', 'click', function(event){
		$(this).addClass('oppenned');
		event.stopPropagation();
	})
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('oppenned');
	})
	$(document).delegate('.cls', 'click', function(event){
		$('.open').removeClass('oppenned');
		event.stopPropagation();
	});
});
