import react, {useEffect} from 'react';

function Logout(){
      useEffect(() => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
        sessionStorage.clear();
        window.location.href='/';
      })
}

export default Logout;