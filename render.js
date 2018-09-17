
const render = (...props) => {
  
  props.forEach(e => {  
     append(e);
  });
}

function append(content) {
  const p = document.createElement('p');
  p.textContent = content;
  document.getElementById('content').appendChild(p);
}
