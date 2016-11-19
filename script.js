$(document).ready(function(){

  var notAll = false;




    $(".filter-button").click(function(){
      $(this).toggleClass('active');
      var values = $.map($(".filter-button.active"), function(el) {
        return $(el).attr('data-filter');
      })
      console.log(values);

        // var value = $(this).attr('data-filter');
        //
        // if(value == "all")
        // {
        //     // $('.filter').removeClass('hidden');
        //     $('.filter').show();
        //     notAll = false;
        //     console.log('if', notAll);
        // }
        // else
        // {
        //   if( notAll === false ) {
        //     notAll = true;
        //     $('.filter').hide();
        //   }
        //   console.log('else', notAll);
        //   //  $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //   //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        //     // $(".filter").not('.'+value).hide();
        //     $('.filter').filter('.'+value).show();
        //
        // }
    });

});
