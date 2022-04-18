// import { onAuthStateChanged } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';

// const RequireAuth = ({children}) => {
//     const location = useLocation();
//     onAuthStateChanged(auth, (user)=> {
//         console.log(user);
//         // if(loading){
//         //     return <p>Loading</p>
//         // }
//         const userinfo = auth.currentUser
//         console.log(userinfo);
        
//         if(user){
//             return children;
//         } else{
//             return <Navigate to="/login" state={{from: location}} replace />
//         }
//     })
    
    
    
    
// };

// export default RequireAuth;