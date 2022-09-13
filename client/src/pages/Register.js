import React from "react";
import { Form, message} from "antd";
import  { useEffect, useState } from "react";
import Input from "antd/lib/input/Input";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import '../resourses/authentication.css'
import Spinner from '../components/Spinner'
export default function Register() {
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();
    const onFinish = async(values) => {
      try {
        setLoading(true);
        await axios.post("/api/users/register", values);
        message.success("Registration Successfull");
        setLoading(false);
        
      } catch (error) {
        message.error("Something went wrong");
        setLoading(false);
      }
    };
    useEffect(() => {
      if (localStorage.getItem("cache-user")) {
        navigate("/");
      }
    }, []);
  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_9toyegu9.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Register</h1>
           
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="primary" type="submit" >
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
