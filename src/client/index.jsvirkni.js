const _ = require('lodash');

function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'therdse!'], ' ');
	return element;
};
document.body.appendChild(component());

 function getvals(name){
    return fetch('api/greeting/' + name)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch(error => console.warn(error));
  }
  
  getvals("Villi").then(response => console.log(response));