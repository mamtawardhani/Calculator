let abc = document.getElementById("screen")

buttons =  document.querySelectorAll("button")
let screenValue=""

for(item of buttons){
    item.addEventListener("click", (e)=>{
        buttonText =  e.target.innerText
        console.log(buttonText)


        if(buttonText==="C"){
            screenValue=""
            abc.value=screenValue
        }

        else if(buttonText==="="){
            abc.value = eval(screenValue)
        }

        else{
            screenValue +=buttonText
            abc.value = screenValue
        }
    })
}