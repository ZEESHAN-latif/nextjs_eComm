import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import style from "./index.module.scss";
import Eye from "../../assets/icons/Eye.png";
import EyeOff from "../../assets/icons/EyeOff.png";
import Image from "next/image";
import { registerUser } from "@/store/productSlices/productSlices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";


const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signUpForm] = Form.useForm();
  const onFormSubmit = async (values) => {
  console.log(values);
  const data = {
    name: values.name,
    password: values.password,
    address:values.address,
    email:values.email,
    contact:values.phone
  }

  dispatch(registerUser(data))
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
          form={signUpForm}
          name={"basic"}
          onFinish={onFormSubmit}
          autoComplete={"off"}
          // validateMessages={validateMessages}
          layout="vertical"
          // className={style.signUpForm}
        >
          <Form.Item
            label={"Full Name"}
            name={"name"}
            rules={[
              {
                required: true,
                message: "Name is required",
              },
            ]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

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
          <Form.Item label={"Phone Number"} name={"phone"}>
            <Input placeholder="Enter number" />
          </Form.Item>

          <Form.Item
            label={"Address"}
            name={"address"}
            rules={[
              {
                required: true,
                message: "Address is required",
              },
            ]}
          >
            <Input placeholder="Enter your Address" />
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
        </Form>
        <div>
          <div
          // className={style.signUpWrraper}
          >
            <div
             className={style.checkBox}
            >
              <Checkbox
                defaultChecked={true}
                //  onChange={onChange}
              />
              <p style={{ fontSize: "15px" }}>
                I accept the <span>Terms</span> &<span>Privacy Policy</span>
              </p>
            </div>
            <Form
             form={signUpForm} onFinish={onFormSubmit}
            >
              <Button
                htmlType="submit"
                // disabled={!isAccept}
                className={style.signUpBtn}
              >
                Sign Up
                {/* {(isLoadingEmailVerification && <Spin />) || "Sign Up"} */}
              </Button>
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>Don’t have an account?</p>
            <span
              
              onClick={() => router.push('/login')}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;