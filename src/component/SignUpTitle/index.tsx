interface AuthTitleProps {
    title: string;
    message: string;
}

const SignUpTitle = ({ title, message }: AuthTitleProps) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#323B4B", fontSize: "26px", fontWeight: "bold" }}>
                {title}
            </h2>
            <p
                style={{
                    color: "#8A94A6",
                    marginTop: "19px",
                    fontSize: "18px",
                    fontWeight: "500",
                }}
            >
                {message}
            </p>
        </div>
    );
};

export default SignUpTitle;
