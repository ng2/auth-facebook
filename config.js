angular.module('ng2-auth-facebook')
.config(['$injector', 'OAuth2Provider'
  , function ($injector, OAuth2Provider) {
  OAuth2Provider.addStrategy({
      name: 'facebook'
    , service: 'OAuth2Facebook'
  });
}]);