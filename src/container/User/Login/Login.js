

import { Link, Route } from 'react-router-dom';
import Button from '../../../components/Button';
import './Login.css';
import logo from "../../../assets/images/logo.png";
import { useState } from 'react';
import useLogin from "../../../userHook/Login.hook"
import { Card, Col, Container, Row } from 'react-bootstrap';



const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { Submit, handleChange, clearData, data } = useLogin()



    return (
        <Container>
            <img src={logo} />

            <Card className='card-design'>
                <Row>
                    <Col>
                        <label className='lbl-Color'>User Name</label>
                        <input
                            type='text'
                            name='username'
                            value={data.username}
                            placeholder="User Name"
                            onChange={handleChange}
                            className='form-control'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <label className='lbl-Color'>Password</label>
                        <input
                            type={showPass ? 'text' : 'password'}
                            name='password'
                            value={data.password}
                            placeholder="Password"
                            onChange={handleChange}
                            className='form-control'
                        />
                    </Col>
                </Row>

                <Row>
                    <Col size='6'>
                        <Button
                            color="warning"
                            click={Submit}
                            classes='button'
                            btnName='Login' />
                    </Col>
                    <Col size='6'>
                        <Link to={"/signup"} ><Button color="warning" click={clearData} classes='button' btnName='Sign Up' /></Link>
                    </Col>
                </Row>
            </Card>

        </Container>
    );
};

export default Login;
