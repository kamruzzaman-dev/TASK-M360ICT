const SecurityChecking = ({ marks }: { marks: number }) => {
    const generateSpans = (count: number, color: string) => {
        const spans = [];
        for (let i = 0; i < count; i++) {
            spans.push(
                <span
                    key={i}
                    style={{
                        width: "68px",
                        height: "4px",
                        borderRadius: "2px",
                        background: color,
                        marginRight: i < count - 1 ? "10px" : "0",
                    }}
                ></span>
            );
        }
        return spans;
    };

    const totalSpans = 6; // Total number of spans
    const firstSpanCount = Math.min(marks, totalSpans);
    const secondSpanCount = totalSpans - firstSpanCount;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "30px",
            }}
        >
            {generateSpans(firstSpanCount, "#38CB89")}
            {generateSpans(secondSpanCount, "#F3F3F3")}
        </div>
    );
};

export default SecurityChecking;
