function addtask(){
    document.getElementById("opacity-screen").style.visibility="visible";
    
}
function close_tsk(){
    document.getElementById("opacity-screen").style.visibility="hidden";
}
var flag = true;
function edit_btn(){
    if(flag){
    var messages = document.querySelectorAll(".tsk_del");

    messages.forEach(message => {
       message.style.visibility = "visible";

    });
    var del_chk = document.querySelectorAll(".del-chk");

    del_chk.forEach(message => {
       message.style.setProperty('display', 'inline-block', 'important');

    });
    document.getElementById('icon').remove();
    var i =document.createElement('i');
    i.className = "fa-solid fa-check"
    i.id = "icon";
    document.getElementById('i-icon').appendChild(i);

    document.getElementById("edt-txt").innerHTML = "&nbspDone";
    
    flag=false;
    
    
}
else{
    var messages = document.querySelectorAll(".tsk_del");

    messages.forEach(message => {
       message.style.visibility = "hidden";

})

var del_chk = document.querySelectorAll(".del-chk");

    del_chk.forEach(message => {
        message.style.removeProperty('display');

    });
    document.getElementById('icon').remove();
    var i =document.createElement('i');
    i.className = "fa-solid fa-pen-to-square"
    i.id = "icon";
    document.getElementById('i-icon').appendChild(i);

    document.getElementById("edt-txt").innerHTML = "&nbspEdit";
    clearInterval(interval);
    flag=true;  

}
}

// function third() {
//     this.classList.toggle('tsk_del');
//     this.classList.toggle('edt-btn');
//     }
//     document.querySelector('#demo').addEventListener('click', third);

var count = 0;
function tskinadd(){
    if(count<2){
        var div = document.createElement('input');
    div.type = 'text';
    div.placeholder = 'Task Name';
    div.className = 'taskinput';
    div.style.display = 'inline';
    div.required = true;
    document.getElementById('form').appendChild(div);
    count+=1;
    }
    if(count==2){
        document.getElementById('in_add').style.display="none";
        document.getElementById('in_del').style.display="inline";
    }
}
function tskindel(){
        
        if(count<=2){
            document.getElementsByClassName('taskinput')[count-1].remove();
            count-=1;
        }

        if(count==0){
            document.getElementById('in_add').style.display="inline";
            document.getElementById('in_del').style.display="none";
        } 
        
}
countback=1;
function tskadd(){
    countback+=1;
    if(countback==0){
        document.body.style.backgroundSize = '25%';
    }
    else{
        document.body.style.backgroundSize = '0%';
    }

    var title=document.getElementById('tsktitle').value;
    var input1 = document.getElementById('tskname1').value;
    
    let inputx = document.getElementsByClassName('taskinput');
    let data = [].map.call(inputx, elem => elem.value);
    var input2 = data[0];
    var input3 = data[1];
   
    if(title.length !==0 && input1.length !== 0){
        var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var h4 = document.createElement('h4');
    h4.innerHTML=title;
    var i = document.createElement('i');
    i.className = "fa-solid fa-circle-xmark tsk_del"
    
    div1.className = 'task-div';
    div2.className = 'task-title';
    h4.className = 'grad-txt';
    
    var div3 = document.createElement('div');
    div3.className = 'task-content';

    document.getElementById("main").appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(i);
    div2.appendChild(h4);
    div1.appendChild(div3);
    
    document.getElementById("opacity-screen").style.visibility="hidden";
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    const inputs = document.querySelectorAll('.taskinput,#tskname1,#tsktitle');
    inputs.forEach(input => {
        input.value = '';
    });
    }


    if(input1.length !== 0){

        var p1 = document.createElement('p'); 
        p1.className = 'flex-align-items';

        var s1 = document.createElement('span');
        s1.className = 'chk_span';

        var i1 = document.createElement('i');
        var in1 = document.createElement('input');
        var lb1 = document.createElement('label');
        var randnum = Math.random();
        
        i1.className = 'fa-solid fa-do-not-enter del-chk';
        in1.className = 'styled-checkbox';
        in1.type = 'checkbox';
        in1.id = 'chk_'+randnum;
        lb1.htmlFor = 'chk_'+randnum;
        lb1.innerHTML=input1;

        div3.appendChild(p1);
        p1.appendChild(i1);
        p1.appendChild(s1);
        s1.appendChild(in1);
        s1.appendChild(lb1);
    }   
    if(input2.length !== 0){

        var p2 = document.createElement('p');
        p2.className = 'flex-align-items';

        var s2 = document.createElement('span');
        s2.className = 'chk_span'

        var i2 = document.createElement('i');
        var in2 = document.createElement('input');
        var lb2 = document.createElement('label');
        var randnum = Math.random();
        
        i2.className = 'fa-solid fa-do-not-enter del-chk';
        in2.className = 'styled-checkbox';
        in2.type = 'checkbox';
        in2.id = 'chk_'+randnum;
        lb2.htmlFor = 'chk_'+randnum;
        lb2.innerHTML=input2;
        
        div3.appendChild(p2);
        p2.appendChild(i2);
        p2.appendChild(s2);
        s2.appendChild(in2);
        s2.appendChild(lb2);
    }
    if(input3.length !== 0){

        var p3 = document.createElement('p');
        p3.className = 'flex-align-items';

        var s3 = document.createElement('span');
        s3.className = 'chk_span'
        
        var i3 = document.createElement('i');
        var in3 = document.createElement('input');
        var lb3 = document.createElement('label');
        var randnum = Math.random();
        
        i3.className = 'fa-solid fa-do-not-enter del-chk';
        in3.className = 'styled-checkbox';
        in3.type = 'checkbox';
        in3.id = 'chk_'+randnum;
        lb3.htmlFor = 'chk_'+randnum;
        lb3.innerHTML=input3;
          
        div3.appendChild(p3);
        p3.appendChild(i3);
        p3.appendChild(s3);
        s3.appendChild(in3);
        s3.appendChild(lb3);
    }
    
    
    
    
    
}


window.onload = function(){
    /**
     * Just Make sure to return false so that your request will not go the server script
     */
    document.getElementById('form1').onsubmit = function(){
        // After doing your logic that you want to do 

        return false; 
    }
}

const interval = setInterval(window.onload=function myInterval(){
        

        document.querySelectorAll(".tsk_del").forEach(i => i.addEventListener(
            "click",
           function() {
            document.querySelectorAll(".task-div").forEach(i => i.addEventListener(
                "click",
               function() {        
                    this.remove();
                            
                }));
            }));
},1000)



// setInterval(window.onload=function(){

//     document.querySelectorAll(".del-chk").forEach(i => i.addEventListener(
//         "click",
//        function() {
//         document.querySelectorAll(".chk_span").forEach(i => i.addEventListener(
//             "click",
//            function() {  
//             const ele = getElementsByClassName('chk_span')    
//                 this.remove();        
//             }));
//         }));
// },1000)