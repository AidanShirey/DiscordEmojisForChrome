// Base replace script for any emojis already on the page when loaded
// Replace with 😂
document.body.innerHTML = document.body.innerHTML.replace(/(lol|haha|joy)/gi, String.fromCodePoint('0x1F602'));
// Replace with 🤪
document.body.innerHTML = document.body.innerHTML.replace(/(wild)/gi, String.fromCodePoint('0x1F92A'));
// Replace with 🤔
document.body.innerHTML = document.body.innerHTML.replace(/(thinking|hmm)/gi, String.fromCodePoint('0x1F914'));
// Replace with 💀
document.body.innerHTML = document.body.innerHTML.replace(/(dead|lmfao|lmao|dying|died)/gi, String.fromCodePoint('0x1F480'));
// Replace with 🔥
document.body.innerHTML = document.body.innerHTML.replace(/(lit|fire|flame|flames|fuego|litty|hot)/gi, String.fromCodePoint('0x1F525'));
// Replace with 😏
document.body.innerHTML = document.body.innerHTML.replace(/(smug|smirk|sexy)/gi, String.fromCodePoint('0x1F60F'));
// Replace with 🥶
document.body.innerHTML = document.body.innerHTML.replace(/(cold|icy|icey|brr|ice|cool)/gi, String.fromCodePoint('0x1F976'));
// Replace with 😳
document.body.innerHTML = document.body.innerHTML.replace(/(wow|woah)/gi, String.fromCodePoint('0x1F633'));
// Replace with 🤡
document.body.innerHTML = document.body.innerHTML.replace(/(clown|fool)/gi, String.fromCodePoint('0x1F921'));
// Replace with 🤠
document.body.innerHTML = document.body.innerHTML.replace(/(partner|yeha|yee)/gi, String.fromCodePoint('0x1F920'));
// Replace with 😎
document.body.innerHTML = document.body.innerHTML.replace(/pro/gi, String.fromCodePoint('0x1F60E'));
// Replace with 🍃
document.body.innerHTML = document.body.innerHTML.replace(/(loud)/gi, String.fromCodePoint('0x1F343'));

