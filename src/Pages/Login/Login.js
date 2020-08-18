import React, {useState} from 'react';
import Title from './componentes/Title/Title';
import Label from './componentes/Label/Label';
import Input from './componentes/Input/Input';
import './Login.css';


const Login = () => {

//Variables
const [usuario, setUsuario] = useState('');
const [password,setPassword] = useState(0);
const [passerror, setPasserror] = useState(false);

//funciones
//cambio del INput
 function handleChangue(name, value) {
     if(name === 'usuario'){
         setUsuario(value)
     }
     if(name === 'password'){
         if (value.length < 6) {
             setPasserror(true);
         }else{
             setPasserror(false);
         }
         setPassword(value)
     }
 }
 //Al presionar al Boton
 function handleSubmit(){
     let acount = {usuario,password}

     if (acount) {
         console.log(acount);
     }
 }
    return(

        <div className="login-container"> 
            <div className="login-content">
                <Title
                    text='Bienvenido'
                />
                <Label text='Usuario' />            
                <Input
                attribute={{
                        id:'user',
                        name: 'usuario',
                        type: 'text',
                        placeholder: 'Ingrese Su Usuario'                    
                    }}
                    handleChangue={handleChangue}
                />
                <Label text='Contrasenia' />
                <Input
                    attribute={{
                        id:'password',
                        name: 'password',
                        type: 'password',
                        placeholder: 'Ingrese Su Contrasena'                    
                    }}
                    handleChangue={handleChangue}
                    param={passerror}
                />

            <button className="button" onClick= {handleSubmit}>
                INGRESAR
            </button>
            </div>
            
        </div>

    )

};

export default Login;