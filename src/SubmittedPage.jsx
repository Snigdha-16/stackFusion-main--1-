import React from 'react';

function SubmittedPage(props) {
  const { name, email } = props.location.query;

  return (
    <div>
      <h2>Thank you for submitting your details!</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default SubmittedPage;