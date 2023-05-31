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
(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
('a').click(function(event){
    event.preventDefault(); 
	});

let btnSignUp=document.getElementById("btn2");
btnSignUp.onclick = () => document.body.innerHTML = alert("BONJOUR");
//btnSignUp.onclick = alert("BONJOUR");