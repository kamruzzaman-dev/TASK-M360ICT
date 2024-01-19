import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { useGetUserQuery } from "../../../redux/api/userApi";
import optionIcon from "../../../../public/assets/icons/more.svg";

interface UserData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: DataType[];
    support: {
        url: string;
        text: string;
    };
}


interface DataType {
    id?: number;
    first_name: string;
    last_name?: string;
    avatar?: string;
    email: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: "#ID",
        dataIndex: "id",
        key: "id",
        width: 100,
        render: (id) => {
            return `${id}`;
        },
    },
    {
        title: "USER",
        dataIndex: "first_name",
        key: "id",
        render: (first_name: string, record: DataType) => (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img
                    style={{
                        borderRadius: "15px",
                        marginRight: "20px",
                        width: "60px",
                        height: "60px"
                    }}
                    src={record.avatar}
                    alt=""
                />
                {first_name}&nbsp;{record.last_name}
            </div>
        ),
    },

    {
        title: "EMAIL",
        dataIndex: "email",
        key: "email",
        render: (email: string) => {
            return <p>{email}</p>
        },
    },
    {
        title: "OPTIONS",
        dataIndex: "options",
        key: "id",
        render: () => { // TODO: api calling
            return <img src={optionIcon} alt="" />
        },
    },
];


const UserTableList: React.FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentLimit, setCurrentLimit] = useState<number>(7);
    const { data }: { data: UserData } = useGetUserQuery({ page: currentPage, per_page: currentLimit })

    console.log(data);
    return (
        <div>
            <Table bordered={false}
                columns={columns}
                dataSource={data?.data}
                scroll={{ x: true }}
                pagination={{
                    current: currentPage,
                    pageSize: currentLimit,
                    defaultCurrent: 1,
                    pageSizeOptions: ["5", "10", "20"],
                    total: data?.total,
                    onChange: (page, pageSize) => {
                        setCurrentPage(page);
                        setCurrentLimit(pageSize);
                    },
                    onShowSizeChange: (current, size) => {
                        setCurrentPage(current);
                        setCurrentLimit(size);
                    },
                    showSizeChanger: false,
                }} />
        </div>
    );
};

export default UserTableList;
