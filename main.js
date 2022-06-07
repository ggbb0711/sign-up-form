let inputs=document.querySelectorAll('input');
let pass=document.querySelector('#Password');
let pass2=document.querySelector('#Confirm-password');
let email=document.querySelector('#email');
let input_field=document.querySelectorAll('input-field');
let form=document.querySelector('#form');
form.addEventListener('submit',(event)=>{
  let submitable=true;
  if(!isemail(email.value)){
    email.parentElement.classList.add('invalid');
    email.nextElementSibling.textContent='*Invalid email';
    submitable=false;
  }
  if(pass.value!==pass2.value){
    pass.parentElement.classList.add('invalid');
    pass2.parentElement.classList.add('invalid');
    pass.nextElementSibling.textContent='*Password do not match';
    submitable=false;
  }
  console.log(2);
  inputs.forEach(input=>{
    if(input.value===''){
      let label=(input.previousElementSibling.textContent!=='Confirm password')?input.previousElementSibling.textContent:'Password';
      input.parentElement.classList.add('invalid');
      input.nextElementSibling.textContent='* '+label+' can\'t be blank';
      submitable=false;
    }
  })
  if (!submitable){
    event.preventDefault();
  }
})
inputs.forEach(input=>{
  input.addEventListener('input',()=>{
    input.parentElement.className='input-field';
    input.nextElementSibling.textContent='';
  })
})
function isemail(email) {return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);}
