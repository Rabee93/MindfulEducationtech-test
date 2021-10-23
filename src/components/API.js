fetch(`https://mindfuleducation-cdn.s3.eu-west-1.amazonaws.com/misc/data.json`)
.then(response => response.json())
.then(data=> console.log(data));
