# modella-friendly-errors

Because what the hell does PC Loadletter mean?

## Example Usage

  var User = modella('User')
      .attr('password')
      .attr('passwordConfirmation', { friendlyName: 'Password confirmation'})

  User.use(require('modella-friendly-errors'));

  // In reality a validator would probably do this, but for sake of demo...
  var u = new User();
  u.error('password', 'can not be blank');
  u.error('passwordConfirmation', 'must match password');


  u.friendlyErrors()
  // =>
  //  [ { attr: 'password', message: 'can not be blank' },
        { attr: 'passwordConfirmation', friendlyName: 'Password confirmation', message: 'must match password'} ]


  u.errorMessages()
  // => 
  //   [ 'Password can not be blank', 'Password confirmation must match password' ];
