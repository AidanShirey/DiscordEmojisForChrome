// Base replace script for any emojis already on the page when loaded
document.body.innerHTML = document.body.innerHTML.replace(/(hello|goodbye|wave|waving)/gi, String.fromCodePoint('0x1F44B'));
document.body.innerHTML = document.body.innerHTML.replace(/(happy)/gi, String.fromCodePoint('0x1F600'));
document.body.innerHTML = document.body.innerHTML.replace(/(smiling|smile)/gi, String.fromCodePoint('0x1F603'));
document.body.innerHTML = document.body.innerHTML.replace(/(xd)/gi, String.fromCodePoint('0x1F606'));
document.body.innerHTML = document.body.innerHTML.replace(/embarassed/gi, String.fromCodePoint('0x1F605'));
document.body.innerHTML = document.body.innerHTML.replace(/(simp|begging|beg|pleading|plead)/gi, String.fromCodePoint('0x1F97A'));