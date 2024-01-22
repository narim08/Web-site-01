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