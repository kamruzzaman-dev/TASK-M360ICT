import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";

interface DataType {
    id?: number;
    name: string;
    image?: string;
    email: string;
    options: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: "#ID",
        dataIndex: "id",
        key: "id",
        width: 100,
        render: (_text, _record, index) => {
            return `${index + 1}`;
        },
    },
    {
        title: "USER",
        dataIndex: "name",
        key: "id",
        render: (name: string, record: DataType) => (
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
                    }}
                    src={record.image}
                    alt=""
                />
                {name}
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
        key: "options",
        render: (options: string) => {
            return <img src={options} alt="" />
        },
    },
];

const fakeData: DataType[] = [
    {
        name: "john",
        image: "../../../../public/assets/images/image.png",
        email: "john@email",
        options: "../../../../public/assets/icons/more.svg"
    },
    {
        name: "zaman",
        image: "../../../../public/assets/images/image.png",
        email: "zaman@gmail.com",
        options: "../../../../public/assets/icons/more.svg"
    }
]

const UserTableList: React.FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentLimit, setCurrentLimit] = useState<number>(7);

    return (
        <div>
            <Table bordered={false}
                columns={columns}
                dataSource={fakeData}
                scroll={{ x: true }}
                pagination={{
                    current: currentPage,
                    pageSize: currentLimit,
                    defaultCurrent: 1,
                    pageSizeOptions: ["5", "10", "20"],
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
