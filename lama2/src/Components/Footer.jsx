import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='primary' className='fixed-bottom text-center text-lg-left text-white'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='/'>
          loanhub.com
        </a>
      </div>
    </MDBFooter>
  );
}