


let div=document.createElement("div")
div.className="formstyle"
let form=document.createElement("form")
form.setAttribute("name","form1")


let inp=document.createElement("input")
inp.setAttribute("id","calc")
inp.setAttribute("type","text")
inp.setAttribute("name","answer")
form.appendChild(inp)
let brc=document.createElement("br")
div.appendChild(brc)

let bc =document.createElement("input")
bc.className="c"
bc.setAttribute("type","button")
bc.setAttribute("value","C");
bc.addEventListener("click",()=>{form1.answer.value = ''})
form.appendChild(bc)



let br=document.createElement("br")
form.appendChild(br)
let br1=document.createElement("br")
form.appendChild(br1)



let fi=document.createElement("input")
fi.className="btn"
fi.setAttribute("type","button")
fi.setAttribute("value","1");
fi.addEventListener("click",()=>{form1.answer.value += '1'})
form.appendChild(fi)

let tw=document.createElement("input")
tw.className="btn"
tw.setAttribute("type","button")
tw.setAttribute("value","2");
tw.addEventListener("click",()=>{form1.answer.value += '2'})
form.appendChild(tw)


let b3 =document.createElement("input")
b3.className="btn"
b3.setAttribute("type","button")
b3.setAttribute("value","3");
b3.addEventListener("click",()=>{form1.answer.value += '3'})
form.appendChild(b3)

let bp =document.createElement("input")
bp.className="btn"
bp.setAttribute("type","button")
bp.setAttribute("value","+");
bp.addEventListener("click",()=>{form1.answer.value += '+'})
form.appendChild(bp)

let br2=document.createElement("br")
form.appendChild(br2)
let br3=document.createElement("br")
form.appendChild(br3)


let b4 =document.createElement("input")
b4.className="btn"
b4.setAttribute("type","button")
b4.setAttribute("value","4");
b4.addEventListener("click",()=>{form1.answer.value += '4'})
form.appendChild(b4)

let b5 =document.createElement("input")
b5.className="btn"
b5.setAttribute("type","button")
b5.setAttribute("value","5");
b5.addEventListener("click",()=>{form1.answer.value += '5'})
form.appendChild(b5)

let b6 =document.createElement("input")
b6.className="btn"
b6.setAttribute("type","button")
b6.setAttribute("value","6");
b6.addEventListener("click",()=>{form1.answer.value += '6'})
form.appendChild(b6)

let bm =document.createElement("input")
bm.className="btn"
bm.setAttribute("type","button")
bm.setAttribute("value","-");
bm.addEventListener("click",()=>{form1.answer.value += '-'})
form.appendChild(bm)

let br4=document.createElement("br")
form.appendChild(br4)
let br5=document.createElement("br")
form.appendChild(br5)

let b7 =document.createElement("input")
b7.className="btn"
b7.setAttribute("type","button")
b7.setAttribute("value","7");
b7.addEventListener("click",()=>{form1.answer.value += '7'})
form.appendChild(b7)

let b8 =document.createElement("input")
b8.className="btn"
b8.setAttribute("type","button")
b8.setAttribute("value","8");
b8.addEventListener("click",()=>{form1.answer.value += '8'})
form.appendChild(b8)

let b9 =document.createElement("input")
b9.className="btn"
b9.setAttribute("type","button")
b9.setAttribute("value","9");
b9.addEventListener("click",()=>{form1.answer.value += '9'})
form.appendChild(b9)

let bmu =document.createElement("input")
bmu.className="btn"
bmu.setAttribute("type","button")
bmu.setAttribute("value","*");
bmu.addEventListener("click",()=>{form1.answer.value += '*'})
form.appendChild(bmu)

let br6=document.createElement("br")
form.appendChild(br6)
let br7=document.createElement("br")
form.appendChild(br7)

let b0=document.createElement("input")
b0.className="btn"
b0.setAttribute("type","button")
b0.setAttribute("value","0");
b0.addEventListener("click",()=>{form1.answer.value += '0'})
form.appendChild(b0)

let bt =document.createElement("input")
bt.className="btn"
bt.setAttribute("type","button")
bt.setAttribute("value",".");
bt.addEventListener("click",()=>{form1.answer.value += '.'})
form.appendChild(bt)

let bd =document.createElement("input")
bd.className="btn"
bd.setAttribute("type","button")
bd.setAttribute("value","/");
bd.addEventListener("click",()=>{form1.answer.value += '/'})
form.appendChild(bd)

let be =document.createElement("input")
be.className="btn"
be.setAttribute("type","button")
be.setAttribute("value","=");
be.addEventListener("click",()=>{form1.answer.value =eval(form1.answer.value) })
form.appendChild(be)




div.appendChild(form);
document.body.append(div)

