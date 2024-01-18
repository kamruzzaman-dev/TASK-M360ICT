import Navbar from "../../component/Navbar";
import SignUpTitle from "../../component/SignUpTitle";
import SocialSignUP from "../../component/SocialSignup";
import SignInForm from "../../component/form/auth/SignInForm";

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <SignUpTitle
        title="Sign In"
        message="Welcome back, you’ve been missed!"
      />
      <SocialSignUP />
      <SignInForm />
    </div>
  );
};

export default SignIn;
