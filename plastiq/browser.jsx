/** @jsx plastiq.jsx */
var plastiq = require('plastiq');

function setName(model) {
  model.loading = true;

  return fetch('/ajax').then(res => res.json()).then(json => {
    model.loading = false;
    model.name = json.name;
  }).catch(e => {
    model.loading = false;
    model.name = error.message;
  });
}

function render(model) {
  return model.loading
  ?
    <h1>loading...</h1>
  :
    <h1 onclick={() => setName(model)}>{ model.name }</h1>
}

plastiq.append(document.body, render, {name: 'hello', loading: false});
