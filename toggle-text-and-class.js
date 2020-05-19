$('#myDiv').click(function() {
  var el  = $('#someSelector');    
  el.text(el.text() == 'view more' ? 'view less' : 'view more');

  $(this).toggleClass(function(){
    return $(this).is('.red, .blue') ? 'red blue' : 'red';
  })
});

====================================

The most beautiful answer is... Extend jQuery with this function...
  $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
  });

HTML:
<button class="example"> Initial </button>

Use:
$(".example").toggleText('Initial', 'Secondary');
