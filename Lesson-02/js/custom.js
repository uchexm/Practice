let u_name = document.myForm.u_name;
let message = document.getElementById('message');


function runMe(){
  if( u_name.value.length < 3){
    message.innerHTML = 'put more letters';
    message.style.color = 'blue';
    u_name.style.backgroundColor = 'red';
    u_name.style.color = 'white';
  }else if ( u_name.value.length == 5){
    message.innerHTML = 'Nice going';
    message.style.color = 'green';
    u_name.style.backgroundColor = 'green';
    u_name.style.color = 'white';
  }else if ( u_name.value.length > 8){
    message.innerHTML = 'Ok you hit the mark';
    message.style.color = 'orange';
    u_name.style.backgroundColor = 'orange';
    u_name.style.color = 'white';
  }
}

/*You can use js minify to minify the js 
and js beautify to make it 
*/