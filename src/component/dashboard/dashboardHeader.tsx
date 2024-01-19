import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import userImage from "../../../public/assets/images/image.png";
import bell from "../../../public/assets/icons/notification-bell.svg";
import { ChangeEvent, useState } from "react";
const DashboardHeader = () => {

    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);

        console.log(e.target.value)
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "23px 35px 0 38px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Input
                    style={{
                        width: "539px",
                        height: "54px",
                        borderRadius: "14px",
                        background: "#F0F5FA",
                    }}
                    suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
                    placeholder="Search"
                    variant="filled"
                    value={searchValue}
                    onChange={handleSearchChange}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "43px",
                        cursor: "pointer",
                    }}
                >
                    <img src={bell} alt="" />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                >
                    <img
                        style={{
                            borderRadius: "50%",
                        }}
                        src={userImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
