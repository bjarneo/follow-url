<p align="center">
  <img src="https://raw.githubusercontent.com/bjarneo/follow-url/master/logo.png" alt="follow-url">
</p>

<h1 align="center">
    follow
</h1>

Follow an URL redirect chain to the end of life

Installation
------
```
npm i -g follow-url
```

Usage
------

```bash
$ follow https://bit.ly/2nphub2

Following https://bit.ly/2nphub2

# URLs
0 https://bit.ly/2nphub2
1 http://ow.ly/W7oOu
2 http://bjarneo.codes/

follow-url by https://github.com/bjarneo

```

Programmatically usage
```
npm i --save follow-url
```

The function returns a promise.

```js
const followUrl = require('follow-url');

followUrl('https://bit.ly/2nphub2').then(console.log);

/*
[
    'https://bit.ly/2nphub2',
    'http://ow.ly/W7oOu',
    'http://bjarneo.codes/'
]
*/

```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.