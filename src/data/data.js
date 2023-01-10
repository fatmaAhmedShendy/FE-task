import React, { Component } from 'react';

 const data = (props) =>{

    return(
        <>
            <div>
                <span>
                    <span className='text-end'>
                    اسمك الكريم 
                    </span> :
                    {props.name}
                </span>
            </div>
            

           <div>
                    <span>
                        <span className='text-end'>
                        رقم الجوال
                        </span>
                        : {props.phone}
                    </span>
           </div>
            <div>
                    <span>
                        <span className='text-end'>            
                        البريد الالكتروني
                        </span>
                        : {props.email}
                    </span>
            </div>

            <div>
                    <span>
                    <span className='text-end'>  كلمة المرور </span>
                        
                    : {props.password}
                    </span>
            </div>
        </>
    )
}

export default data;
