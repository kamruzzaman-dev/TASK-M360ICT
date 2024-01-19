import paper from "../../../public/assets/icons/paper.svg";

const Logo = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                paddingTop: "31px",
                paddingLeft: "34px",
            }}
        >
            <div>
                <img src={paper} alt="paper" />
            </div>
            <p
                style={{
                    marginLeft: "12px",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#4E5D78",
                }}
            >
                Stack
            </p>
        </div>
    );
};

export default Logo;