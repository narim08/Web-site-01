//Dark Mode color
let Links = {
  setColor:function(color, index){
    let alist = document.querySelectorAll('a');
  for(let i=0; i<alist.length; i++){
    if(i==index) continue;
    else{
      alist[i].style.color = color;
    }
    }
  }
  //$('a').css('color', color); jquery
}

let Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color); //jquery
  },
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color); //jquery
  }
}

function darkmode (self, index){
  let target = document.querySelector('body');
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    self.style.color='black';
    self.style.backgroundColor='rgb(243, 216, 106)';
    Links.setColor('white', index);
  } else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    self.style.color='white';
    self.style.backgroundColor='rgb(45, 45, 74)';
    Links.setColor('black', index);
  }
}


//CheckList
document.addEventListener('DOMContentLoaded', () => {
  const input =  document.querySelector('#inputCheckList')
  const addBtn = document.querySelector('#addCheckList')
  const checkList = document.querySelector('#checkListField')

  function addCheckListItem() {
    const inputValue = input.value.trim();

    if(inputValue !== ''){ //입력이 있을 때만 추가
      const item = document.createElement('div')

      const checkBox = document.createElement('input') //완료
      checkBox.setAttribute('type','checkbox')
      
      const text = document.createElement('span') //내용
      text.textContent = input.value
  
      const removeBtn = document.createElement('button') //삭제
      removeBtn.textContent = 'X'
      removeBtn.className = 'removeCheckList'
  
      removeBtn.addEventListener('click', (event) => {
        event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
      })
  
      checkBox.addEventListener('change', (event) => {
        if(checkBox.checked){
          text.style.textDecoration = "line-through"
        }else{
          text.style.textDecoration = "none"
        }
      })
  
      item.appendChild(checkBox)
      item.appendChild(text)
      item.appendChild(removeBtn)
  
      checkList.appendChild(item)
      input.value=''
    }
  }
  
  addBtn.addEventListener('click', addCheckListItem);

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addCheckListItem();
        }
    })
})
