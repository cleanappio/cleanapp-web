import { useEffect } from 'react';
import logo from './CleanApp_Logo.png'

export const OptOutEmail = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const optOutAddress = process.env.REACT_APP_EMAIL_CONSENT_API_ENDPOINT;
  const email = searchParams.get('email');

  useEffect(() => {
    console.log('Call opt out API for', optOutAddress, 'with email', email);
    fetch(optOutAddress, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        version: '2.0',
        contact_email: {
          email: email,
          consent_report: false,
        }
      }),
      headers: {
        'Content-type': 'application/json',
      }
    }).then((resp) => {
      console.log(resp);
    })
    .catch((reason) => {
      console.error(reason);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <img src={logo} alt="CleanApp Logo" style={{ maxWidth: '200px', marginBottom: '20px' }} />
        <h1 style={{ color: '#2c6e49' }}>CleanApp Opt Out Email</h1>
        <p style={{ fontSize: '18px', color: '#333' }}>
          You have successfully opted out from receiving CleanApp reports.
        </p>
      </div>
    </div>
  );
}