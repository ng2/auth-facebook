# auth-facebook
> Facebook strategy for ng2/auth

## Installation

`component install ng2/auth-facebook`

Then require it in your `index.html` and add it as a dependency:

```js
require('ng2-auth-facebook');
//...
angular.module('myApp',['ng2AuthFacebook']);
```

## Usage

Strategies are, inspired from `passport.js`, pretty much drop-ins.

Configuration is very simple:

```js
.config( function (OAuth2FacebookProvider) {
  OAuth2FacebookProvider.configure({
    client_id: 'yourCliendId'
  });
});
```

Full configuration params (with defaults) are:

```js
var opts = {
  cliend_id: '',
  scope: 'email',
  redirect_uri: encodeURIComponent(window.location.origin+'/auth/facebook/callback'),
  response_type: 'token',
  state: ''+Math.random()*0.1e19+Math.random()*0.5e19+Math.random()*0.9e19
};
````

While any and all of this can be overriden by the object passed to the `.configure` call, if you are using this with [ng2/auth](https://github.com/ng2/auth) you may want to leave the trailing `/auth/facebook/callback` in the `redirect_uri` component as `ng2/auth` handles that route for you seamlessly.

And that's about it. You can start the facebook login process by calling `OAuth2.login('facebook')` from anywhere the `OAuth2` service has been injected.