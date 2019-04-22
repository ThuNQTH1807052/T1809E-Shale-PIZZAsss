// Hàm thêm item vào cart
function Addcart(value,price){
  //alert(value);
  var p = price.replace('$','');
  var total = parseFloat(p);
  if($('#TOTAL').text()!== ""){
      var current = parseFloat($('#TOTAL').text());
      total = total + current;
    }
  $('#TOTAL').text(total);
  $('#selecteditem').text($('#selecteditem').text() + value + '-');
  var items = $('#selecteditem').text();
  if(items !== ""){
      var count = items.split("-").length - 1;
      $('#totalitem').text(count);
    }
  };

$(document).ready(function() {	
	//Chạy modal cart
	$('#cartModal').on('shown.bs.modal', function() {
	// duyệt từng item product để check ẩn hiện
	    $( '.itempro' ).each(function() {
			var control = this;
				//ẩn item không add to cart
					if($('#selecteditem').text().indexOf(control.id + "-") > -1){
							$(this).parent().show();
							}else{
								$(this).parent().hide();
							}
					});
		$('#totalpopup').text("TOTAL: " + $('#TOTAL').text());
			})
        });

//Hàm xóa item khỏi cart
function Removecart(control){
    // truyển vào control là nút X remove
	var item = $(control).prev();
	$(control).parent().hide();
	//remove id khỏi add to cart
	$('#selecteditem').text($('#selecteditem').text().replace(item.prop('id')+'-', ""));
	var items = $('#selecteditem').text();
	//giảm item ở cart icon
	var count = items.split("-").length - 1;
    $('#totalitem').text(count);
    };

    
    



