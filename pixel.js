


let body = document.getElementsByTagName('body')[0];
var header = document.createElement("header");
document.body.appendChild(header);
let h1 = document.createElement("h1");
h1.innerText = 'Pixel Maker';
h1.className = 'card-panel hoverable blue-grey darken 2 white-text'
body.appendChild(h1);
body.className = 'container #e8f5e9 green lighten-5 center-align';



for (var j = 0; j < 1260; j++) {
  let canvas = document.createElement('div');
    canvas.style.border = "thin solid grey";
    canvas.style.width = '2.2%';
    canvas.style.float = 'left';
    canvas.style.paddingBottom = '2.2%';
    canvas.style.backgroundColor = 'white';
    canvas.className = 'z-depth-2'
    canvas.addEventListener('click', function() {
    this.style.backgroundColor = document.getElementById('picker').value;
  });
  body.appendChild(canvas);
}

var div = document.createElement("div");
body.appendChild(div);
div.className = 'container-fluid'
  var input = document.createElement("input");
  input.type = "color";
  input.id = 'picker';
  input.className = "align-center waves-effect waves-light"
  div.appendChild(input);


  let button = document.createElement("button");
  button.innerHTML = 'Refresh Canvas';
  button.className = "waves-effect waves-light btn";
  body.appendChild(button);
  button.addEventListener('click', function() {
    var divarr = document.getElementsByTagName('div')
    for (var i = 0; i < divarr.length; i++) {
      divarr[i].style.backgroundColor = 'white';
  }
});



// var header = document.createElement("header");
// document.body.insertBefore(header, body.script);
