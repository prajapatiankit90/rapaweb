import { useState, useEffect } from 'react';

import IButton from '../../../components/Button';
import './Signup.css';

import useSignup from '../../../userHook/Signup.hook';
import { Container, Row, Col } from 'react-bootstrap';



const Signup = () => {
   const {clearData, Submit, data, handleChange, GotoLogin} = useSignup();

    return (
        
                <Container>
                    <Row>
                        <Col>
                            <input
                                name='PUNAME'
                                value={data.PUNAME.toUpperCase()}
                                onChange={handleChange}
                                placeholder="User Name" 
                                className='form-control'/>
                                

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <input
                                name='PEMAIL'
                                type='email'
                                value={data.PEMAIL}
                                onChange={handleChange}
                                placeholder="Email"
                                className='form-control' />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <input
                                type='number'
                                name='PCONTACTNO'
                                value={data.PCONTACTNO}
                                onChange={handleChange}
                                placeholder="Contact No"
                                className='form-control' />
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <input
                                name='PLOCAT'
                                value={data.PLOCAT}
                                onChange={handleChange}
                                placeholder="Locat"
                                className='form-control' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type='password'
                                name='PPASSWORD'
                                value={data.PPASSWORD}
                                onChange={handleChange}
                                placeholder="Password"
                                className='form-control' />
                        </Col>
                    </Row>

                    {/* <Row>
                        <Col>
                            <Item>
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    value={data.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password" />
                            </Item>
                        </Col>
                    </Row>
                    {error.confirmPassword ? (<span className='errors'>*Confirm Password required</span>) : ""} */}
                    <Row>
                        <Col>
                            <IButton color="warning" click={Submit} classes='' btnName='Sign Up' />
                        </Col>
                        <Col>
                            <IButton color="warning" click={clearData} classes='' btnName='Cancel' />
                        </Col>
                    </Row>

                    <Row>
                        <Col size='4'></Col>
                        <Col size='4'>
                            {/* <Link to="/login">Login</Link> */}
                            <IButton color="secondary" click={GotoLogin} classes='' btnName='Login' />
                        </Col>
                        <Col size='4'></Col>

                    </Row>
                
                </Container>


    );
};

export default (Signup);