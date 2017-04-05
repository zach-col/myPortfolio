app.directive('cssLinks', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/cssLinks.html' 
  }; 
});