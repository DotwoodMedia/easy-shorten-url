# Easy shorten url
Shorten a URL very easily with this url shortener!

<a href="https://www.npmjs.com/package/easy-shorten-url"><img src="https://img.shields.io/npm/v/easy-shorten-url.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/easy-shorten-url"><img src="https://img.shields.io/npm/dt/easy-shorten-url.svg?maxAge=3600" alt="NPM downloads" /></a>

# 💻 Example

1. Install module: `npm install easy-shorten-url`
2. Insert the following code for a good result:
```
const url = require("easy-shorten-url");

url.shorten('https://dotwood.media/', function(res) {
	console.log(res); // Returns https://url.dotwood.media/8h6ywx5z
});
```

# 📑 License
This project has an <a href="https://github.com/DotwoodMedia/easy-shorten-url/blob/main/LICENSE">Apache 2.0</a> license