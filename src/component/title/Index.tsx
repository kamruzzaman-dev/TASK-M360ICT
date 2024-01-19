
const Title = ({ title }: { title: string }) => {
    return (
        <h2
            style={{
                fontSize: "23px",
                fontWeight: 600,
                color: "#323B4B",
                fontFamily: "Inter",
                marginBottom: "42px",
            }}
        >
            {title}
        </h2>
    );
};

export default Title;