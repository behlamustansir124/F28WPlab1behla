var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/behlamustansir124/F28WPlab1behla/blob/main/week%204/cities1.json');
ourRequest.onload = function () {
    console.log(ourRequest.responseText);
};
ourRequest.send();
