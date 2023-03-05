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

  var toDoArray = [];
  var completedTaskArray = [];
  var pendingTaskArray = [];

  function addTaskPopUp(event){
      event.preventDefault();
      var modal = document.getElementById("myModal");
      var btn = document.getElementById("addBtn");
      var span = document.getElementsByClassName("close")[0];
      btn.onclick = function() {
      modal.style.display = "block";
      }
      span.onclick = function() {
      modal.style.display = "none";
      }
      window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
      }
  }
  

  function saveNewTask(event){
      event.preventDefault();
      var title=document.getElementById('taskTitle').value
      var discription=document.getElementById('taskDiscription').value
      var date=document.getElementById('submissionDate').value
      debugger;
      var tempVar = {};
      tempVar["title"]= title;
      tempVar["discription"] = discription;
      tempVar["date"] = date;
      toDoArray.push(tempVar);
      document.getElementById('col1TaskContainer').innerHTML += `
      <label class="container">
          <div class="col-xs-4" id="toDoTasks">
             <h3 id="title" >${title}<input type="checkbox" class="checkboxToDo" id="checkbox" value="1" ></h3>
              <p id="discription">${discription} <br> ${date}</p>
          <span class="checkmark></span> </div>
      </label>`
  }

  function saveList(event){
      debugger
      event.preventDefault();
      console.log(JSON.stringify(toDoArray));
      console.log(JSON.stringify(completedTaskArray));
      
  
      var a = document.getElementsByClassName('checkboxToDo'); 
      for( var i = 0 ; i < a.length; i++){
          if(a[i].checked && !completedTaskArray.includes(toDoArray[i].title)){
              console.log(completedTaskArray.includes(toDoArray[i].title))
              var tempTitle = toDoArray[i].title;
              var tempDiscription= toDoArray[i].discription;
              var tempDate = toDoArray[i].date;

              completedTaskArray.push(tempTitle);
              document.getElementById('col2TaskContainer').innerHTML += `
              <label class="container">
                  <div class="col-xs-4" id="toDoTasks">
                  <h3 id="title" >${tempTitle}</h3>
                      <p id="discription">${tempDiscription} <br> ${tempDate}</p>
                  <span class="checkmark></span> </div>
              </label>`
              
              //document.getElementById("col1TaskContainer").style.display = "none";
              //document.getElementsByClassName("container").style.display = "none";
  
          }
          else{
              if(!a[i].checked && !pendingTaskArray.includes(toDoArray[i].title) ){
              var tempTitle = toDoArray[i].title;
              var tempDiscription= toDoArray[i].discription;
              var tempDate = toDoArray[i].date;
              pendingTaskArray.push(tempTitle);
              document.getElementById('col3TaskContainer').innerHTML += `
              <label class="container">
                  <div class="col-xs-4" id="toDoTasks">
                  <h3 id="title" >${tempTitle}</h3>
                      <p id="discription">${tempDiscription} <br> ${tempDate}</p>
                  <span class="checkmark></span> </div>
              </label>`
              }
          }

      }
      //document.getElementById("col1TaskContainer").style.display = "content";
  }


}