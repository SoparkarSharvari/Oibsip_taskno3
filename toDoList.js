window.onload = () => {
    
  newQuote();
};
setInterval(newQuote, 5000);
function newQuote() {
  debugger
  var counter=Math.random() * (100-1) + 1;
  fetch('https://api.adviceslip.com/advice/'+counter).then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    console.log(Adviceobj.advice);
    document.getElementById('newQuote').innerHTML = `<p>"${Adviceobj.advice}"</p>`;
  }).catch(error => {
    console.log(error);
  });

}
