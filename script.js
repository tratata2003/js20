scr = function(){
  try{
    list.addEventListener("click", (e) => {
      var tag = e.target;
      alert(tag.src);
    })
  }catch(error){}

   try{
    listwithnumber.addEventListener("click", (e) => {
      var tag = e.target;
      tag.textContent = tag.textContent * tag.textContent;
    })
  }catch(error){}

  try{
    elem.style.cssText = 'font-size: 30px; color: red; border: 10px dotted green';
  }catch(error){}

  try{
    parent = document.querySelector('#parent');
    elem = document.querySelector('#element');
    let li = document.createElement('li');
    li.innerHTML = '!!!';
    parent.insertBefore(li, element)
  }catch(error){}
  
    try{
   let elem = document.querySelector('#element2');
        elem.previousElementSibling.innerHTML += "!";
  }catch(error){}

  
}
