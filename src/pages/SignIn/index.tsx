import Navbar from "../../component/Navbar";
import SignUpTitle from "../../component/SignUpTitle";
import SocialSignUP from "../../component/SocialSignup";

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <SignUpTitle
        title="Sign In"
        message="Welcome back, you’ve been missed!"
      />
      <SocialSignUP />
    </div>
  );
};

export default SignIn;
