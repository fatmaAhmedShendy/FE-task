import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const phone =props=> {
    
    return (
      <>
        <div className='mb-4'>
            <label className='form-label'> رقم الجوال
            </label>
                <PhoneInput
                    onChange={(val) => props.handleOnPhoneChange(val)}
                />
            
        </div>
      </>
      
    );
  }
  
  export default phone;
  