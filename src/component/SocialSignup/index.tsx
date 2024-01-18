import { Button, Divider } from "antd";
import google from "../../../public/assets/icons/google.svg";
import iphone from "../../../public/assets/icons/iphone.svg";
const SocialSignUP = () => {
    return (
        <div style={{ maxWidth: "540px", margin: 'auto' }}>
            <div
                style={{
                    display: "flex",
                    marginTop: "30px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "30px",
                }}
            >
                <Button
                    type="primary"
                    style={{
                        backgroundColor: "#F0F5FA",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "11px",
                        borderRadius: "16px",
                        fontSize: "16px",
                        fontWeight: "500",
                        width: "255px",
                        height: "58px",
                        color: "#8A94A6",
                    }}
                >
                    <img src={google} alt="GoogleIcon" />
                    Sing In with Google
                </Button>
                <Button
                    type="primary"
                    style={{
                        backgroundColor: "#F0F5FA",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "11px",
                        borderRadius: "16px",
                        fontSize: "16px",
                        fontWeight: "500",
                        width: "255px",
                        height: "58px",
                        color: "#8A94A6",
                    }}
                >
                    <div style={{ marginTop: "2px" }}>
                        <img src={iphone} alt="IphoneIcon" />
                    </div>{" "}
                    Sign In with Apple ID
                </Button>
            </div>
            <Divider
                style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#B0B7C3",
                    marginTop: "30px",
                    marginBottom: "30px",
                }}
            >
                OR
            </Divider>
        </div>
    );
};

export default SocialSignUP; 