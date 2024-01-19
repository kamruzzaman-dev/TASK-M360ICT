import { Layout, Menu } from "antd";
import menu from "../../../public/assets/icons/menu.svg";
import sales from "../../../public/assets/icons/sales.svg";
import users from "../../../public/assets/icons/user.svg";
import { Link } from "react-router-dom";
import Logo from "../../component/logo";

const { Sider } = Layout;

const MenuItems = () => {

    const items = [
        {
            id: 1,
            icon: menu,
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            id: 2,
            icon: users,
            label: "Users",
            path: "/dashboard/users",
        },
        {
            id: 3,
            icon: sales,
            label: "Sales",
            path: "/dashboard/sales",
        },
    ].map((items) => ({
        key: items.id,
        icon: <img src={items.icon} alt="" />,
        label: (
            <Link
                to={items.path}
                style={{ fontSize: "14px", fontWeight: 500, color: "#A7AFBC" }}
            >
                {items.label}
            </Link>
        ),
    }
    ));

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{ background: "white", height: "100vh", borderRight: "1px solid #F3F3F3" }}
            width={249}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Logo />
            <p
                style={{
                    color: "#B0B7C3",
                    fontSize: "12px",
                    fontWeight: 500,
                    backgroundColor: "white",
                    paddingTop: "40px",
                    paddingLeft: "34px",
                    paddingBottom: "28px",
                }}
            >
                PAGES
            </p>
            <Menu
                mode="inline"
                defaultSelectedKeys={["4"]}
                style={{
                    width: "216px",
                    margin: "auto",
                    backgroundColor: "white",
                    borderRight: "1px solid transparent",
                }}
                items={items}
            />
        </Sider>
    );
};

export default MenuItems;