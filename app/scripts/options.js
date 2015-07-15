'use strict';

(function($){
  $(function(){
    $('#blacklisted_accounts').val(localStorage.blacklistedAccounts);

    $('#save_btn').closest('form').submit(function(e) {
      e.preventDefault();
      localStorage.blacklistedAccounts = $('#blacklisted_accounts').val();

      window.alert('The options have been saved!');
    });
  });
})(jQuery);
