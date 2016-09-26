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
      <div>
        <h1>{ model.name }</h1>
        <button onclick={() => setName(model)}>Update</button>
      </div>
}

plastiq.append(document.body, render, {name: 'hello', loading: false});
