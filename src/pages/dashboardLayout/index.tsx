import { Layout } from "antd";
import MenuItems from "../../component/dashboard/Menu";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../component/dashboard/dashboardHeader";

const { Content } = Layout;



const DashboardLayout = () => {

    return (
        <div className="main-container">
            <Layout style={{ backgroundColor: "white" }}>
                <MenuItems />
                <Layout style={{ background: "white" }}>
                    <DashboardHeader />
                    <Content
                        style={{
                            marginTop: "48px",
                            paddingLeft: "38px",
                            paddingRight: "35px",
                            background: "white",
                        }}
                    >
                        <div>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DashboardLayout;
