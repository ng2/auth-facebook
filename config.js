angular.module('ng2AuthFacebook')
.config(['$injector', 'OAuth2Provider'
  , function ($injector, OAuth2Provider) {
  OAuth2Provider.addStrategy({
      name: 'facebook'
    , service: 'OAuth2Facebook'
  });
}]);