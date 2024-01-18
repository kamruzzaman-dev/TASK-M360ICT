import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  message,
  Space,
} from "antd";
import at from "../../../../public/assets/icons/at.svg";
import lock from "../../../../public/assets/icons/lock.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

type SingInType = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const [checked, setChecked] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (value: SingInType) => {
    const data = { ...value, checked };

    // api will add here
    console.log(data);


    message.success("Sign In Successful!");
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Fill the form with proper data !");
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ maxWidth: "540px", margin: 'auto' }}
    >
      <Form.Item
        name="email"
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
                Please enter a valid email address.
              </p>
            ),
          },
          { type: "email", warningOnly: false },
        ]}
      >
        <Input
          prefix={<img style={{ marginRight: "12px" }} src={at} alt="at" />}
          style={{
            height: "58px",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "16px",
            boxShadow: isTyping ? "0px 6px 8px 0px rgba(255, 86, 48, 0.10)" : "none", // Apply box-shadow when typing
            paddingLeft: "18px",
          }}
          onFocus={() => setIsTyping(true)} // Set isTyping to true when the input is focused
          onBlur={() => setIsTyping(false)} // Set isTyping to false when the input loses focus
          placeholder="Your Email"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
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
                Please enter a valid password.
              </p>
            ),
          },
          { type: "string", warningOnly: false },
          { min: 6 },
        ]}
      >
        <Input.Password
          prefix={<img style={{ marginRight: "12px" }} src={lock} alt="at" />}
          style={{
            height: "58px",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "16px",
            paddingLeft: "18px",
            paddingRight: "18px",
            transition: "box-shadow 0.3s",
            boxShadow: isTyping ? "0px 6px 8px 0px rgba(255, 86, 48, 0.10)" : "none", // Apply box-shadow when typing
          }}
          placeholder="Your password"
          type="password"
          onFocus={() => setIsTyping(true)} // Set isTyping to true when the input is focused
          onBlur={() => setIsTyping(false)} // Set isTyping to false when the input loses focus
        />
      </Form.Item>
      <Checkbox
        style={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#B0B7C3",
        }}
        onChange={onChange}
      >
        Remember Me
      </Checkbox>
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
          >
            Sign In
          </Button>
        </Space>
      </Form.Item>
      <p
        style={{
          marginTop: "35px",
          fontSize: "16px",
          fontWeight: 500,
          color: "#B0B7C3",
          textAlign: "center",
        }}
      >
        Don’t have an account yet?&nbsp;
        <Link to={"/sign-up"} style={{ color: "#377DFF" }}>
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
