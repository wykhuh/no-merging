'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var $buttonMerge = $container.find('.merge-message button.merge-branch-action');
    var disabled = true;
    var buttonHtml = 'no merging!!';

    $buttonMerge.attr('disabled', disabled);
    $buttonMerge.html(buttonHtml);
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
