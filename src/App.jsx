import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import TableDatePicker from './TableDatePicker';
const SERVICE_ID = "service_r3mxpgr";
const TEMPLATE_ID = "template_ukqe1hh";
const USER_ID = "I1qSyTp86jbTQUo4t";


const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
     
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset();
  };

return (
    <div className="App" >
      <Form onSubmit={handleOnSubmit} className='myForm'>
      <h3 style={{textAlign:"center"}}>USER-FORM</h3>
      <hr></hr>
      <label htmlFor='name'>Full Name</label>
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        name='name'
        placeholder='Full Name…'
        required
        icon='user circle'
        iconPosition='left'
      />
      <label htmlFor='email'>Email</label>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          name='email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <label  htmlFor='phoneNumber'>Phone Number</label>
        <Form.Field
         
        className='phnNo'
          id='form-input-control-phn'
          control={Input}
          type="number"
          name='phoneNumber'
          placeholder='phoneNumber…'
          required
          icon='mail'
          iconPosition='left'
        />
          <label  htmlFor='DOB'>DOB</label>
           <Form.Field>
          <TableDatePicker></TableDatePicker>
        </Form.Field>


        <Button type='submit' style={{width:'100px', textAlign:'center', background:'lightblue', borderRadius:'10px', marginLeft:'15%' }}>Submit</Button>
      </Form>
    </div>
  );
}
export default App;