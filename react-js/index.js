const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function add(){
    if(inputBox.value===''){
        alert("TASKS ARE EMPTY !")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener("click",function(e){
    // confirm("are u want to remove the task")
     
    e.target.parentElement.remove() 
    saveData()
},);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()