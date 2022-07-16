import { Link } from "react-router-dom";
import React from 'react'

function Home (){
    return (
    
    <div className="Home">
    <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
    
      </div>
      <section>
          <div class="header">
              <h2 class="logo">Vitara Learn</h2>
              <ul>
                  <li>
                      {/* <a href="#" class="active">Home</a> */}
                  </li>
              </ul>
          </div>
          <div class="bannerText">
              <h2>Vitara Learn</h2><br/>
              <h3>Learn the modern way</h3>
              <p>Start your Data Structures and Algorithms journey and Earn a Certificate Now </p>
              
              <Link to="step1">
     <button type="button">
          Start Course
     </button>
 </Link>
      
          </div>
    {/* <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      ></Form.Item>
      </Form> */}
          <img src="leap.png" class="bulb"/>
          <ul class="sci">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
          </ul>
          <div class="element1"></div>
          <div class="element2"></div>
    </section>
  </div>)
}

export default Home
