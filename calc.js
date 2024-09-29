let btns = document.querySelectorAll("button");
let display = document.querySelector(".main");

let result = "";
let extra = "";
for (let btn of btns){
    btn.addEventListener("click",(evt)=>{
        evt.preventDefault();

        if (btn.value === "bksp")
        {
            let temp = extra;
            extra="";
            console.log(temp.length);
            for (let i = 0; i <temp.length-1 ; i++){
                extra=extra+temp[i];
            }
            result=extra;
            display.innerText=extra;
            if (temp.length == 0){
                result="";
            }
        } 
        else if(btn.value==="="){
            extra = result;
            display.innerText= eval(result);
            result=eval(result);
        } 
        else if (btn.value ==="AC"){
            result="";
            display.innerText=result; 
        }
        else {
            result=result+btn.value; 
            display.innerText=result;
        }    
  
    })
}

