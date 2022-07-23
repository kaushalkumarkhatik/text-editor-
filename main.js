const text_dta = document.getElementById("txt_");
//f1
click_btn = false
const f1 = ()=> {
  if (click_btn) {
    text_dta.style.fontWeight = "bold"
    click_btn = false
  } else {
    text_dta.style.fontWeight = "normal"
    click_btn = true
  }
}
//f2
const f2 = ()=> {
  if (click_btn) {
    text_dta.style.fontStyle = "italic"
    click_btn = false
  } else {
    text_dta.style.fontStyle = "normal"
    click_btn = true
  }

}
//f3
const f3 = ()=> {
  text_dta.style.textAlign = "left"
}
//f4
const f4 = ()=> {
  text_dta.style.textAlign = "center"
}
//f5
const f5 = ()=> {
  text_dta.style.textAlign = "right"
}
//f6
const f6 = ()=> {
  text_dta.style.textTransform = "uppercase"
}
//f7
const f7 = ()=> {
  text_dta.style.textTransform = "lowercase"
}
//f8
const f8 = ()=> {
  text_dta.style.textTransform = "capitalize"
}
//f9
const f9 = ()=> {
  text_dta.style.fontWeight = "normal";
  text_dta.style.textAlign = "left";
  text_dta.style.fontStyle = "normal";
  text_dta.style.textTransform = "capitalize"
  text_dta.value = ""

}

//copy button
document.getElementById('copy_').addEventListener('click', copy_);
function copy_() {
  const copy_text = document.getElementById("txt_");
  copy_text.select();
  document.execCommand("copy");
}

//count words

const countWord=()=>{
  var words=document.getElementById("txt_").value;
  var count=0;
  
  var split=words.split(' ');
  var i=0
  for (i; i < split.length; i++) {
    if (split[i] != ""){
      count +=1;
    }
  }
  document.getElementById("show").innerHTML=`Words : ${count}`
}


