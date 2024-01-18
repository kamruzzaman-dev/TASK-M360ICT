import paper from "../../../public/assets/icons/paper.svg";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useState } from "react";

const items: MenuProps["items"] = [
    {
        label: <p>English (UK)</p>,
        key: "0",
    },
    {
        label: <p>English (USA)</p>,
        key: "1",
    },
];
const Navbar = () => {
    const [languageType, setLanguageType] = useState<string>('English (UK)')
    const handleToggle = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLanguageType("English (USA)")
    };
    return (
        <div className="main-container">
            <div
                style={{
                    paddingLeft: "81px",
                    paddingRight: "84px",
                    marginTop: "28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
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
                <Dropdown menu={{ items }} trigger={["click"]}>
                    <a
                        style={{
                            color: "#B0B7C3",
                            backgroundColor: "#F0F5FA",
                            height: "43px",
                            width: "146px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "16px",
                            fontSize: "12px",
                            fontWeight: 500,
                            cursor: "pointer",
                        }}
                        onClick={handleToggle}
                    >
                        <Space>
                            {languageType}
                            <DownOutlined size={12} style={{ marginLeft: "24px" }} />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
};

export default Navbar;
