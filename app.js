let input = document.getElementById('inputBox');
let equalBtn = document.querySelector('.equalBtn');
let buttons = document.querySelectorAll('button');
let string = "";
buttons.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            console.log(string)
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        input.style.color = 'white'
    })
    
})
function equalBtnClicked(){
    buttons
}