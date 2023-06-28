const cardnum=document.getElementById("cardnum");
const cardname=document.getElementById("cardname");
const m=document.getElementById("m");
const y=document.getElementById("y");

const cvv=document.getElementById("cvv");

const nam=document.getElementById("name");
const num=document.getElementById("num");
const mon=document.getElementById("mon");
const year=document.getElementById("year");
const cvc=document.getElementById("cvc");
const date=document.querySelectorAll(".date");
const err1=document.getElementById("err1");
const err2=document.getElementById("err2");
const err3=document.getElementById("err3");

var regex=/[a-zA-Z]/;
var zeros="0000 0000 0000 0000";
var preval=0;

date.forEach((item)=>{
    item.oninput=function(){
        if(this.value.length>2){
            this.value=this.value.slice(0,2);
        }
        let len=this.value.length;
        if(this.id=='mon'){
            m.innerText=this.value.substring(0,len) + zeros.substring(len,2);
        }
        else{
            y.innerText=this.value.substring(0,len) + zeros.substring(len,2);
        }
        if(err2.innerText!=""){
            err2.innerText="";
        }
        if(mon.style.borderColor!="" || year.style.accentColor!=""){
            mon.style.borderColor="";
            year.style.borderColor="";
        }
    }
});
num.oninput=function(){
    let len=this.value.length;
    if(preval<len){
        this.value=this.value.replace(/\s/g,'').replace(/(.{4})/g, '$1 ');
    }
    if(len>19){
        this.value=this.value.slice(0,19);
    }
    if(regex.test(num.value)){
        err1.innerText="wrong format, numbers only";
    }
    else{
        err1.innerText="";
    }
    cardnum.innerText=this.value.substring(0,len)+zeros.substring(len,20);
    preval=len;
};
cvc.oninput=function(){
    if(this.value.length>3){
        this.value=this.value.slice(0,3);
    }
    let len=this.value.length;
    cvv.innerText=this.value.substring(0,len)+ zeros.substring(len,3);
    if(err3.innerText!=""){
        err3.innerText="";
    }
    if(cvc.style.borderColor!=""){
        cvc.style.borderColor="";
    }
};
nam.oninput=function(){
    this.value=this.value.toUpperCase();
    if(this.value==""){
        cardname.innerText="XXXX XXXX";
    }
    
    else{
        cardname.innerText=this.value;
    }
    if(this.value.length>25){
        this.value.slice(0,25);
    }
};
function confirm(){
    let bool=false;
    if(year.value==""){
        year.style.borderColor="hsl(0,100%,66%)";
        err2.innerText="Can't br empty";
        bool=true;
    }
    if(mon.value==""){
        mon.style.borderColor="hsl(0,100%,66%)";
        err2.innerText="Can't br empty";
        bool=true;
    }
    if(cvc.value==""){
        cvc.style.borderColor="hsl(0,100%,66%)";
        err3.innerText="Can't br empty";
        bool=true;
    }
    if(err1.innerText!=""){
        bool=true;
    }
    if(bool) return;
    document.querySelector(".sillu").style.transform="rotateY(180deg)";
}
function abort(){
    location.reload();
}

