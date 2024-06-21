let btn= document.getElementById("btn");
let nameT= document.getElementById("name");
let amt= document.getElementById("amt");
let p= document.getElementById("p");
let history= document.getElementById("history");

function operation(){

    if(nameT.value.trim()=== "" || amt.value.trim()=== ""){
        p.innerText= "Please enter your transaction";
        return;
    }

        if(amt.value.includes("-")){
            history.innerHTML+= `
            <div class="hisCol hisBrdRed">
        <h3 class="hisName ">${nameT.value}</h3>
        <h3 class="hisAmt ">${amt.value}</h3>
    </div>
            `;
        }
        else{
            history.innerHTML+= `
            <div class="hisCol">
        <h3 class="hisName ">${nameT.value}</h3>
        <h3 class="hisAmt ">${amt.value}</h3>
    </div>
            `;
        }

        
let main=document.getElementById("main").innerText;
let a= Number.parseFloat(main)
let amt1= document.getElementById("amt").value;
let b= Number.parseFloat(amt1);
let exp=document.getElementById("exp").innerText;
let c=Number.parseFloat(exp);
let inc=document.getElementById("inc").innerText;
let d= Number.parseFloat(inc)


if(amt1.includes("-")){
a+=b;
c+=b;
document.getElementById("main").innerText= a;
document.getElementById("exp").innerText= c;
}
else{
a+=b;
d+=b;
document.getElementById("main").innerText=a;
document.getElementById("inc").innerText=d;
}

amt.value=""
nameT.value=""
}


btn.addEventListener("click", operation);
