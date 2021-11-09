# Easy shorten url
Shorten a URL very easily with this url shortener!

[![downloadsBadge](https://img.shields.io/npm/dt/easy-shorten-url?style=for-the-badge)](https://npmjs.com/easy-shorten-url)
[![versionBadge](https://img.shields.io/npm/v/easy-shorten-url?style=for-the-badge)](https://npmjs.com/easy-shorten-url)

# 💻 Example

1. Install module: `npm install easy-shorten-url`
2. Insert the following code for a good result:
```
const url = require("easy-shorten-url");

url.shorten('https://dotwood.media/').then(res => {
	console.log(res); // Returns https://url.dotwood.media/8h6ywx5z
}).catch(err => {
	console.log(err);
});
```

URL with a custom code
```
const url = require("easy-shorten-url");

url.custom('https://dotwood.media/', 'dm').then(res => {
	console.log(res); // Returns https://url.dotwood.media/8h6ywx5z
}).catch(err => {
	console.log(err);
});
```

# 📑 License
This project has an <a href="https://github.com/DotwoodMedia/easy-shorten-url/blob/main/LICENSE">Apache 2.0</a> license