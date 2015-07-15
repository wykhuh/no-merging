'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var $buttonMerge = $container.find('.merge-message button.merge-branch-action');
    var repoName = $('.url').find('span').text();
    var disabled = false;
    var buttonHtml = '';
    var buttonMessage = '';

    chrome.runtime.sendMessage({from: 'content', subject: 'localStorage'}, function(response){
      if (!response) { return; }
      var localStorage, accountsString, accountsArray;

      localStorage = response.localStorage;
      if(localStorage.blacklistedAccounts) {
        accountsString = localStorage.blacklistedAccounts;
        accountsString = accountsString.replace(/ /g, '');
        accountsArray = accountsString.split(',');

        if(accountsArray.indexOf(repoName) !== -1) {
          disabled = true;
          buttonMessage =  'no merging!!';

          buttonHtml = '<span class="octicon octicon-git-merge"></span> ' +  buttonMessage;

          $buttonMerge.attr('disabled', disabled);
          $buttonMerge.html(buttonHtml);
        }
      }
      });
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 10000);
})(jQuery);
