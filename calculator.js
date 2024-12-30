
let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if (string === '5+3') {
                document.querySelector('input').value = "Thank You Teacher 🙏🙏";
            }
            else{
                string=eval(string);
                document.querySelector('input').value=string;
            } 
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})