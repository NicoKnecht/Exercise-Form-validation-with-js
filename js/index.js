const button = document.querySelector('#submitBtn');    



const validateForm = () =>{
      
    const userInputValue = document.querySelector('#user').value;
    const passInputValue = document.querySelector('#pass').value;  
  
     
     

        let arroba = userInputValue.indexOf("@");
    

        if( userInputValue == '' || passInputValue == '' ){// me fijo si algo esta vacio
          
            alert('llene todas las casillas de login por favor');
            return false;
        }
        if( arroba <1){// me fijo si hau un arroba en el user
            alert('el usuario ingresado es invalido')
            return false;
        }else{
            return true;
        }
     

    }

    // el evento esta agregao directamente en el form


