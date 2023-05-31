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


//(document).ready(function(){
    //$('.box').hide().fadeIn(1000);
    //});


//('a').click(function(event){
    //event.preventDefault(); 
	//});

//let btnSignUp=document.getElementById("btn2");
//btnSignUp.onclick = () => document.body.innerHTML = alert("BONJOUR");
