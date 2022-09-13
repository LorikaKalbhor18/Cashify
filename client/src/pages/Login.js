import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../resourses/authentication.css';
import Spinner from '../components/Spinner'
import axios from "axios";
export default function Login() {
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();
    const onFinish = async(values) => {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "cache-user",
        JSON.stringify({...response.data , password:''}));
        setLoading(false);
        message.success("Login successful");
        navigate('/');
      } catch (error) {
        setLoading(false);
        message.error("Login failed");
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
        
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Login </h1>
           
            
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Not Registered ? Click Here To Register</Link>
              <button className="primary" type="submit">
                Login
              </button>
            </div>
          </Form>
        </div>
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
      </div>
    </div>
  );
}
