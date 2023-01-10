import React, { Component,useState } from 'react';
import Phone from './Phone/phone';
import CustomerDetails from './CustomerDetails/CustomerDetails';
import Data from '../data/data';
// class Registrationform extends Component {
function  Registrationform () {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnNameChange = (event) =>{
        setName(event.target.value);
    };
    const handleOnEmailChange = (event) =>{
        setEmail(event.target.value);
    };
    const handleOnPhoneChange = (value)=> {
        setPhone(value);
    };

    const handleOnPasswordChange = (event)=> {
        setPassword(event.target.value);
    };
    const [submitted, setsubmitted] = useState(false);
    const onSubmitHandler =(event)=> {
        setsubmitted(true)
        event.preventDefault();        
    } 

    // render() { 
        return (
            <>
                <div className="container">
                    <div className='text-end'>
                            <h4>حياك الله في زد</h4>
                            
                            <form onSubmit={onSubmitHandler}>
                                <CustomerDetails handleOnNameChange={handleOnNameChange} handleOnEmailChange={handleOnEmailChange} handleOnPasswordChange={handleOnPasswordChange}/>
                                <Phone handleOnPhoneChange={handleOnPhoneChange} />
                                <input type="submit" className='form-control form-control-lg'/>                
                            </form>
                            {submitted? 
                                <Data
                                    name={name}
                                    phone={phone}
                                    email={email}
                                    password={password}
                                />
                            : <br/>}
                    </div>
                </div>
            </>
        );
    // }
}
 
export default Registrationform;