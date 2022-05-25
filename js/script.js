const sections = document.querySelectorAll(".section");
const controls = document.querySelectorAll(".controls");
const control = document.querySelectorAll(".control");
const shift = document.querySelectorAll(".shift");
const allsections = document.querySelector(".my-component")
function changePage() {
    for (let i = 0; i < control.length; i++) {
        control[i].addEventListener('click', function () {
            let current_active = document.querySelectorAll('.activeIt');
            current_active[0].className = current_active[0].className.replace(' activeIt', '');
            this.className += ' activeIt';
        })
    }
    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sections.forEach((opn) => {
                opn.classList.remove('show');
            })
            // e.target.classList.add('show');
            // sections.forEach((section) => {
            //     section.classList.remove('show');
            // })
            element = document.getElementById(id);
            element.classList.add('show');
        }
    })
}
changePage();

//Hover...
function hover(){
    trigger=document.getElementsByClassName('triangle');
    target=document.getElementsByClassName('triangle3');
    trigger[0].addEventListener('mouseover',function(){
        target[0].classList.remove("popdown");
        target[0].classList.add("popup");
        document.getElementsByClassName("blendimg")[0].style.opacity="50%";
    });
    trigger[0].addEventListener('mouseout',function(){
        target[0].classList.remove("popup");
        target[0].classList.add("popdown");
        document.getElementsByClassName("blendimg")[0].style.opacity="0%";
        });
}
hover();

//Role Section..
roles=[" A Passionate Designer"," A Web Developer"," Youtuber"];
let count=0;
let index=0;
let currentText='';
let letter='';
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function Call(ms){
    while(index>0){
    letter=currentText.slice(0,index--);
    document.querySelector('.role').textContent=letter; 
    await sleep(ms);
    }
}

(async function type(){
    if(count===roles.length){
        count=0;
    }
    currentText=roles[count];
    letter=currentText.slice(0,++index);
    document.querySelector('.role').textContent=letter;
    if(letter.length===currentText.length){
        count++; 
      await sleep(3000); 
      document.querySelector('.role').classList.add('border-red');
      document.querySelectorAll('.cngtored').forEach(opn=> opn.classList.add('color-red'));           
      await Call(300); 
      document.querySelector('.role').classList.remove('border-red');    
      document.querySelectorAll('.cngtored').forEach(opn=> opn.classList.remove('color-red'));           
    }
    setTimeout(type,500);
}())