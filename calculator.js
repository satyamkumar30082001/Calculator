
var first = document.getElementById('outputBox');
first.value=null;
var second='';
// let buttons = document.querySelectorAll('button');

function Delete(){
    first.value=first.value.slice(0,-1);
    second=second.slice(0,-1);
}
function Data(operr){
    // console.log(operr);
    second+=operr;
    // console.log(second);
    first.value=second;

}

function Process()
{
    second=eval(second).toString();
    // console.log(second);
    first.value=second;
}

function Clear()
{
    second='';
    first.value='';
}



// var first = document.getElementById('outputBox');
// var second;
// let buttons = document.querySelectorAll('button');

// function Data(operr){
//     console.log(operr);
//     second+=operr;
//     console.log(second);
//     first.value=second;

// // }


// let Data = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click',(e) =>{
//         if(e.target.innerHTML == '='){
//             Data = eval(Data);
//             input.value = Data;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             Data = "";
//             input.value = Data;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             Data = string.substring(0, Data.length-1); 
//         }
//         else{
//             Data += e.target.innerHtml;
//         console.log(Data);
//         input.value = Data;
//         }
//     })
// })