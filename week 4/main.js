var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://your-github-username.github.io/your-repositoryname/cities1.json');
ourRequest.onload = function () {
    console.log(ourRequest.responseText);
};
ourRequest.send();
