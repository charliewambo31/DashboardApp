function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = 'admin';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == 'admin')
    {
      field.value = email;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
	});

const btnSignUp=document.getElementById("btn2");
btnSignUp.onclick = () => document.body.style.innerHTML = alert("etes vous sur");