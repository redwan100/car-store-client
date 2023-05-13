import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);

  // TRACK LOCATION 
  const location = useLocation()


  if(loading) {
    return <progress className="progress w-56"></progress>;
  }

  if(user?.email){
    return children
  }

return <Navigate to={'/login'} state={{from:location}} replace/>
}

export default PrivetRoute