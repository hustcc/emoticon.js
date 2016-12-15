# emoticon.js

> Simple javascript library to generate random text **emoticon**. [demo here](http://git.hust.cc/emoticon.js).

![travis-ci](https://travis-ci.org/hustcc/emoticon.js.svg?branch=master)


# Usage


Install with npm.

> **npm install emoticon.js**


 - **Import it with script tag in HTML.**

	insert the code below `between <body> and </body>`.
	
	```html
	<script src="dist/emoticon.min.js"></script>
	```

 - **Import it with require.**

	```js
	var emoticon = require('emoticon.js');
	//or
	import emoticon from 'emoticon.js';
	```

Then you can use it with `emoticon();`;

```js
console.log(emoticon()); // {︶。︶}┛
```


# LICENSE

MIT @hustcc code from [emoticon/](https://phpz.org/emoticon/).