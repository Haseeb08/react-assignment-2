import React, { useEffect } from 'react';
import Auth from "./Auth";
import Loading from '../_components/atoms/_loading/_loading';

function Callback() {
    console.log("inside callback");
    useEffect(()=>{
        console.log("inside callback");
        const auth = new Auth();
        auth.handleAuthentication();
    } )

    return(
        <div style={{height:"92vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Loading />
        </div>
    )
}
export default Callback;