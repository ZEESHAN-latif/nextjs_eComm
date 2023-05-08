import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import style from "./style.module.scss"; 
import Eye from "../../assets/icons/Eye.png";
import EyeOff from "../../assets/icons/EyeOff.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { loginUser } from "@/store/productSlices/productSlices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";


const Login = () => {
  const router = useRouter();
  const notify = () => toast("Please provide a valid email address and password");
  const dispatch = useDispatch();
  const [loginForm] = Form.useForm();
  const onFormSubmit = async (values) => {
  console.log(values);
  const data = {
    password: values.password,
    email:values.email,
  }

  dispatch(loginUser(data))
  };

  return (
    <div className={style.mainContainer}>
      <div>
        <div className={style.welcomeWrraper}>
          <img
            src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png"
            alt="dsf"
          />
          <h2>Welcome Back</h2>
  
        </div>
        <Form
          form={loginForm}
          name={"basic"}
          onFinish={onFormSubmit}
          autoComplete={"off"}
          // validateMessages={validateMessages}
          layout="vertical"
          // className={style.loginForm}
        >
            <Form.Item
            label={"Email Address"}
            name={"email"}
            rules={[
              {
                required: true,
                type: "email",
                message: `Please provide a valid email address`,
              },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
            <Form.Item
            label={"Password"}
            name={"password"}
            rules={[
              {
                required: true,
                message: "Password is required",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter Password"
              iconRender={(visible) =>
                visible ? (
                  <Image height={18} width={18} src={Eye} alt="f" />
                ) : (
                  <Image height={18} width={18} src={EyeOff} alt="d" />
                )
              }
            />
          </Form.Item>
          <Form.Item
            label={"Confirm Password"}
            name={"confirmPassword"}
            rules={[
              {
                required: true,
                message: "Password is required",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter Password"
              iconRender={(visible) =>
                visible ? (
                  <Image height={18} width={18} src={Eye} alt="f" />
                ) : (
                  <Image height={18} width={18} src={EyeOff} alt="d" />
                )
              }
            />
          </Form.Item>

        </Form>
        <div>
          <div
          >
              <Form
             form={loginForm} onFinish={onFormSubmit}
            >
              <Button
                htmlType="submit"
                className={style.signUpBtn}
                onClick={notify}
              >
                Login
                {/* {(isLoadingEmailVerification && <Spin />) || "Sign Up"} */}
              </Button>
              <ToastContainer />
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>No have any account?</p>
            <span
              
              onClick={() => router.push('/register')}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
