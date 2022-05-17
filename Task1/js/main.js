
let formInput = document.getElementById("form").addEventListener('submit',function(i){
   i.preventDefault(); 
   let checkTrue = true;


   let nameInput = document.getElementById('nameInput');
   if(!nameControl(nameInput.value)){
    nameInput.nextElementSibling.classList.remove('d-none');
    nameInput.nextElementSibling.innerText = 'Name length must be greater than 5 ';
    checkTrue = false;
   }
   else{
    nameInput.nextElementSibling.classList.add('d-none');
   }


   let ageInput = document.getElementById('ageInput')
   if(!ageControl(ageInput.value)){
    ageInput.nextElementSibling.classList.remove('d-none');
    ageInput.nextElementSibling.innerText = 'Age must be greater than 18 ';
    checkTrue = false;
   }
   else{
    ageInput.nextElementSibling.classList.add('d-none');
   }


   let surnameInput = document.getElementById('surnameInput')
   if(!nameControl(surnameInput.value)){
    surnameInput.nextElementSibling.classList.remove('d-none');
    surnameInput.nextElementSibling.innerText = 'Surname length must be greater than 5 ';
    checkTrue = false;
   }
   else{
    surnameInput.nextElementSibling.classList.add('d-none');
   }


   let groupInput = document.getElementById('groupInput')
   if(!nameControl(groupInput.value)){
    groupInput.nextElementSibling.classList.remove('d-none');
    groupInput.nextElementSibling.innerText = 'Group length must be greater than 5 ';
    checkTrue = false;
   }
   else{
    groupInput.nextElementSibling.classList.add('d-none');
   }
   
   
   let alert = document.querySelector('.text-success')
   
   let timeStop=checkForTime(checkTrue,alert)

   let time=setInterval(timeStop,5000)







//    if(checkTrue){
//     alert.classList.remove('visible')
//     }
//     else {        
//         alert.classList.add('visible')
//     }
   
  })


function checkForTime(checkTrue,element){

    if(checkTrue){
         element.classList.remove('visible')
    }
    else{
         element.classList.add('visible')
    }

}



function nameControl(element){
    if(element.length<6){
        return false;
    }
    else{
        return true;
    }
}
function ageControl(element){
    if(element<18){
        return false;
    }
    else{
        return true;
    }
}