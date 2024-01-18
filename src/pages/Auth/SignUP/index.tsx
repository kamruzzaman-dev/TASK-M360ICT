import Navbar from "../../../component/Navbar";
import SignUpTitle from "../../../component/SignUpTitle";
import SocialSignUP from "../../../component/SocialSignup";
import SignUpForm from "../../../component/form/auth/SignUpForm";

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <SignUpTitle
                title="Getting Started"
                message="Create an account to continue!"
            />
            <SocialSignUP />
            <SignUpForm />
        </div>
    );
};

export default SignUp;
