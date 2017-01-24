
let body = document.getElementsByTagName('body')[0];

for (var j = 0; j < 4200; j++) {
  let canvas = document.createElement('div');
    canvas.style.border = "thin solid grey";
    canvas.style.width = '1.1%';
    canvas.style.float = 'left';
    canvas.style.paddingBottom = '1.1%';
    canvas.style.backgroundColor = 'white';

    canvas.addEventListener('click', function() {
    this.style.backgroundColor = document.getElementById('picker').value;
  });
  body.appendChild(canvas);
}

  var input = document.createElement("input");
  input.type = "color";
  input.id = 'picker';
  document.body.appendChild(input);
