/** @jsx plastiq.jsx */
var plastiq = require('plastiq');

var loading = false;

function setName(model) {
  loading = true;

  return fetch('/ajax').then(res => res.json()).then(json => {
    loading = false;
    model.name = json.name;
  });
}

function render(model) {
  return loading
  ?
    <h1>loading...</h1>
  :
    <h1 onclick={() => setName(model)}>{ model.name }</h1>
}

plastiq.append(document.body, render, {name: 'hello'});
