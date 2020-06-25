import React from 'react';

function ErrorPage() {
    
    return(
        <div>
            <h2>Unauthorized Page</h2>
            You have to login first.
        <a href="/"> Back to login page</a>
        </div>
    )
}
export default ErrorPage;