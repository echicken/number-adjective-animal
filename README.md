# number-adjective-animal

Generates passwords consisting of a number, an adjective, and an animal.  Easy
to read, remember, and share over the phone.  Optionally provides 'unicodePwd'
values suitable for use with Active Directory.  Suitable for temporary passwords;
long-term use may cause kidney damage or other unwanted side-effects.

## Installation

```sh
$ npm install number-adjective-animal
```

## Examples

```js
const naa = require('number-adjective-animal');
naa.getPassword(); // '24InnovativeGoats'
naa.getPassword({ adjc : 2 }); // '45ExpectedAnnualKangaroos'
naa.getPassword({ upwd : true }); // { password : ... , unicodePwd : ... }
naa.getPasswords(2), // [ '24InnovativeGoats', '72NiceDoves' ]
```

## API

The `getPassword(opts)` method takes one argument, an *Object* with any of the
properties listed below.  Default values are shown here:

```js
{
    nmax : 999,     // Maximum value of the numeric component of the password, 2 or more
    adjc : 1,       // Number of adjectives to include in the password, 0 or more
    upwd : false,   // Include unicodePwd values?  If true, returns Object, otherwise String
}
```

If `upwd` is `true`, the return value of `getPassword(opts)` will be an *Object*
with `password` and `unicodePwd` properties.  Otherwise the return value will be
a *String* (the password).

A `getPasswords(count, opts)` method is also provided.  An *Array* of `count`
values (as described above) will be returned.

## License

[MIT](https://github.com/echicken/number-adjective-animal/blob/master/LICENSE)
