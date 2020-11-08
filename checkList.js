var list = document.querySelector('ul');
var points = 0;
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {   
    ev.target.classList.toggle('checked');                                  
    document.getElementById("number").innerHTML = ++points;
}
}, false);
