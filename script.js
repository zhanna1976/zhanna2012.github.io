function func(x) {
  return 0.005 * Math.pow(0.2 * Math.pow(x,2), 2);
}
function WhileCycle() {
  let xMin = +document.getElementById("minValue").value;
  let xMax = +document.getElementById("maxValue").value;
  let step = +document.getElementById("step").value;
  let tabResult = [];
  let x = xMin;
  while (x <= xMax)  {
    tabResult.push(func(x));
    x += step;
    console.log(tabResult)
  }
  document.querySelector('.results').innerHTML = '<table class = "result"></table>'
  for(let i = 0; i < tabResult.length; i++){
    let row = document.createElement("tr");
    row.innerHTML = tabResult[i];
    document.querySelector('.result').appendChild(row);
  }
  
}
function DoWhileCycle() {
  let xMin = +document.getElementById("minValue_2").value;
  let xMax = +document.getElementById("maxValue_2").value;
  let step = +document.getElementById("step_2").value;
  let tabResult_2 = [];
  let x = xMin;
  do {
    tabResult_2.push(func(x));
    x += step;
    console.log(x)
  }
  while (x <= xMax);
  document.querySelector('.results_2').innerHTML = '<table class = "result"></table>'
  for(let i = 0; i < tabResult_2.length; i++){
    let row = document.createElement("tr");
    row.innerHTML = tabResult_2[i];
    document.querySelector('.results_2').appendChild(row);
  }
}
function ForCycle() {
  let xMin = +document.getElementById("minValue_3").value;
  let xMax = +document.getElementById("maxValue_3").value;
  let step = +document.getElementById("step_3").value;
  let tabResult_3 = [];
  for (let x = xMin; x <= xMax; x += step)  {
    tabResult_3.push(func(x));
  }
  document.querySelector('.results_3').innerHTML = '<table class = "result"></table>'
  for(let i = 0; i < tabResult_3.length; i++){
    let row = document.createElement("tr");
    row.innerHTML = tabResult_3[i];
    document.querySelector('.results_3').appendChild(row);
  }
}
function Canvas() {
  let xMin = 4;
  let xMax = 6;
  let step = 0.1;
  let tabResult_4 = [];
  while (xMin <= xMax)  {
    tabResult_4.push(func(xMin));
    xMin += step;
  }
  const canvas  = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  let x = 4;
   ctx.translate(canvas.height / 2, canvas.height / 2);
   ctx.beginPath();
   ctx.moveTo(0,0);
  for(let i = 0; i < tabResult_4.length; i++){
    ctx.lineTo(x * 50, tabResult_4[i] * -3000);
    x += step;
  }
  ctx.stroke();
  ctx.closePath();
}