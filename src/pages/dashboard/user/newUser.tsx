import {
    Button,
    Form,
    Input,
    message,
    notification,
    Space,
} from "antd";
import smile from "../../../../public/assets/icons/smile.svg";
import { useState } from "react";
import Title from "../../../component/title/Index";
import { useCreateUserMutation } from "../../../redux/api/userApi";
import { SmileOutlined } from '@ant-design/icons';

type IUserCreateType = {
    email: string;
    password: string;
};

const NewUser = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [form] = Form.useForm();
    const [createUser] = useCreateUserMutation()
    const [api, contextHolder] = notification.useNotification();

    const onFinish = async (value: IUserCreateType) => {
        const data = { ...value };
        // console.log(data);


        // api will add here
        try {
            setIsLoading(true)
            const res = await createUser({ ...data }).unwrap();
            console.log(res);
            if (res?.id) {
                setIsLoading(false);
                form.resetFields();
                api.open({
                    message: "User create successfully!",
                    description: `
                        Name: ${res?.name} \n
                        job: ${res?.job} \n
                        Id: ${res?.id}
                        `,
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                });
            }

            if (res?.error) {
                message.error(res?.error);
                setIsLoading(false);
            }

        } catch (err) {
            setIsLoading(false);
            message.error("something wrong!");
            console.error(err);
        }
    };



    const onFinishFailed = () => {
        message.error("Fill the form with proper data !");
    };

    return (
        <div>
            {contextHolder}
            <Title title={'Users Create'} />
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ maxWidth: "540px", margin: 'auto' }}
            ><Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: (
                            <p
                                style={{
                                    marginTop: "16px",
                                    marginBottom: "15px",
                                    color: "#FF5630",
                                }}
                            >
                                Please enter you name.
                            </p>
                        ),
                    },
                    { type: "string", warningOnly: true },
                ]}
            >
                    <Input
                        prefix={<img style={{ marginRight: "12px" }} src={smile} alt="at" />}
                        style={{
                            height: "58px",
                            fontWeight: 500,
                            fontSize: "16px",
                            borderRadius: "16px",
                            boxShadow: isTyping ? "0px 6px 8px 0px rgba(255, 86, 48, 0.10)" : "none",
                            paddingLeft: "18px",
                        }}
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                        placeholder="Your name"
                        type="string"
                    />
                </Form.Item>
                <Form.Item
                    name="job"
                    rules={[
                        {
                            required: true,
                            message: (
                                <p
                                    style={{
                                        marginTop: "16px",
                                        marginBottom: "15px",
                                        color: "#FF5630",
                                    }}
                                >
                                    Please enter you job.
                                </p>
                            ),
                        },
                        { type: "string", warningOnly: true },
                    ]}
                >
                    <Input
                        prefix={<img style={{ marginRight: "12px" }} src={smile} alt="at" />}
                        style={{
                            height: "58px",
                            fontWeight: 500,
                            fontSize: "16px",
                            borderRadius: "16px",
                            boxShadow: isTyping ? "0px 6px 8px 0px rgba(255, 86, 48, 0.10)" : "none",
                            paddingLeft: "18px",
                        }}
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                        placeholder="Your job"
                        type="string"
                    />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button
                            style={{
                                width: "540px",
                                marginTop: "31px",
                                height: "58px",
                                borderRadius: "16px",
                                backgroundClip: "#377DFF",
                                border: " 1px solid #377DFF",
                                fontSize: "16px",
                                fontWeight: 500,
                                color: "white",
                            }}
                            type="primary"
                            htmlType="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Create User"}
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default NewUser;
