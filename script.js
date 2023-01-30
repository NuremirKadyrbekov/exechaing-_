let transSumEl = document.getElementById("currency");
let mountEl = document.getElementById("mount");
let sumEl = document.getElementById('sum');
let resultEl = document.getElementById('result');


const sumCurrent = () =>{
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value)
  
    let restEl = transSum * mount

   let audio = new Audio 
   audio.src = "1.mp3"
   audio.play(audio)
   resultEl.innerHTML = 'Сумма: ' + restEl.toFixed(2) + ' сом'
   resultEl.style.color = "rgb(140, 236, 116)"

}
sumEl.addEventListener('click', sumCurrent)

