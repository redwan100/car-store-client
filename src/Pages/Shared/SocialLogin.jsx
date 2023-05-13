import { useContext } from 'react';
import {FcGoogle} from 'react-icons/fc'
import { AuthContext } from '../../Context/ContextProvider';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
        })
        .catch(err =>console.log(err))
    }
  return (
    <div className="text-center pb-6">
      <div className="divider">OR</div>
      <button
        className="btn btn-circle btn-outline"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle size={20} />
      </button>
    </div>
  );
}

export default SocialLogin