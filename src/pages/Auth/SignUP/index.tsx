import Navbar from "../../../component/Navbar";
import SignUpTitle from "../../../component/SignUpTitle";
import SocialSignUP from "../../../component/SocialSignup";

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <SignUpTitle
                title="Getting Started"
                message="Create an account to continue!"
            />
            <SocialSignUP />
        </div>
    );
};

export default SignUp;
