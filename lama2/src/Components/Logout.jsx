import react, {useEffect} from 'react';

function Logout(){
    useEffect(() => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
    })
}

export default Logout;