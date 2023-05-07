import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import style from "./style.module.scss"; 
import Eye from "../../assets/icons/Eye.png";
import EyeOff from "../../assets/icons/EyeOff.png";
import Image from "next/image";
import { loginUser } from "@/store/productSlices/productSlices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";


const Login = () => {
  const router = useRouter();
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
            src="https://banner2.cleanpng.com/20180401/ykq/kisspng-shopping-cart-computer-icons-online-shopping-clip-online-shop-5ac11205d8e469.5194885815226025018884.jpg"
            alt="dsf"
          />
          <h2>Create Your Account</h2>
  
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
              >
                Login
                {/* {(isLoadingEmailVerification && <Spin />) || "Sign Up"} */}
              </Button>
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
