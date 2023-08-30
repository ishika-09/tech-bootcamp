import react from 'react';
import ErrorImg from '../Assets/Images/error.jpg'

export default function ErrorPage(){
    return (
        <div className="border d-flex align-items-center justify-content-center" style={{height: '100%'}}>
            <img src={ErrorImg} style={{height: '550px'}}/>
        </div>
    )
}