import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function singupHandler({ email, password }) {
    try{
      setIsAuthenticating(true);
      await createUser(email, password);
    }catch(error){
      console.log(error)
    }
    
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={singupHandler} />;
}

export default SignupScreen;
