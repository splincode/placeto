$(function(){

	$('input[type=text]').each(function(i){

		$a = $(this).val();

		if ($a == '') {

			var $thisTextplaceholder = $(this).attr('placeholder');
			if ($thisTextplaceholder != '') {

					$colorMain = $(this).css('color');

					$(this).val($thisTextplaceholder);
					if(typeof(pColor) == 'string')  $(this).css('color', pColor); else $(this).css('color', '#aaa');

					$(this).attr('data-placeholder', '0');
					
					$pc = $(this).attr('data-pcolor');
					if(typeof($pc) == 'string') $(this).css('color', $pc); 
					

			}
		}



		$(this).focus(function(){

			if($(this).attr('data-placeholder') == "0") {
				
				$a = $(this).val();
				
				 $(this).val(" "); 

				 if(typeof(vColor) == 'string')  $(this).css('color', vColor); else $(this).css('color', '#000');
				 
				 $vc = $(this).attr('data-vcolor');
				 if(typeof($vc) == 'string') $(this).css('color', $vc); 

				 //$(this).removeAttr('placeholder'); 
				// $(this).attr('data-placeholdertext', $a+' ');

				
			} else {
				


			}

		})







	})

	
})

var fout = function(th){

	//alert($(th).attr('data-placeholder'))

	if($(th).attr('data-placeholder') == "0") {
		$thisValue = $(th).val().replace(/^\s*/, "").replace(/\s*$/, "");
		if ($thisValue == ''){
				
			$thisTextplaceholder = $(th).attr('placeholder');
			$(th).val($thisTextplaceholder)
			if(typeof(pColor) == 'string')  $(th).css('color', pColor); else $(th).css('color', '#aaa');
			$pc = $(th).attr('data-pcolor');
			if(typeof($pc) == 'string') $(th).css('color', $pc); 

		} else {
			$(th).attr('data-placeholder', '1');
			$thisValue = $(th).val().replace(/^\s*/, "").replace(/\s*$/, "");
			$(th).val($thisValue)
		}
	} else {

		$thisValue = $(th).val().replace(/^\s*/, "").replace(/\s*$/, "");
		if ($thisValue == ''){

			$thisTextplaceholder = $(th).attr('placeholder');
			$(th).val($thisTextplaceholder)
			if(typeof(pColor) == 'string')  $(th).css('color', pColor); else $(th).css('color', '#aaa');
			$(th).attr('data-placeholder', '0');

			$pc = $(th).attr('data-pcolor');
			if(typeof($pc) == 'string') $(th).css('color', $pc); 


		}



	}



};
