/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('whogetsbeer.core')
    .constant('toastr', toastr)
    .constant('moment', moment);
})();
