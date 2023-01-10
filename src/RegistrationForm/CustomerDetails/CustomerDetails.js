import React, { Component } from 'react';
// class CustomerDetails extends Component {
 const CustomerDetails = props => {
    // render() { 
        return (
            <>
                <div className='mb-4'>
                    <label className='form-label'>اسمك الكريم
                    </label>
                    <input type="text" name="name" className='form-control' onChange={(val) => props.handleOnNameChange(val)}
                    />
                </div>
                   
                <div className='mb-4'>
                    <label className='form-label'>
                        البريد الالكتروني
                    </label>
                    <input type="email" name="email" className='form-control' onChange={(val) => props.handleOnEmailChange(val)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='form-label'>
                        كلمة المرور
                    </label>
                    <input type="password" name="password" className='form-control' required onChange={(val) => props.handleOnPasswordChange(val)}
                    />
                </div>
            </>
        );
    // }
}
 
export default CustomerDetails;