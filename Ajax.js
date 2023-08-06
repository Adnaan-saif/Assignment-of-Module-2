
 let myAPI = "https://jsonplaceholder.typicode.com/posts";
 let configuration = {method: 'GET'};

 fetch(myAPI, configuration)
 .then(response=>response.json())
 .then(result=>console.log(result))
 .catch(error=>console.log(error));