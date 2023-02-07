
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonImg, IonCheckbox, IonLabel, IonItem, IonRouterOutlet, IonRoute } from '@ionic/react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './Login.css';
import logo from "../../../assets/images/logo.png"
import { useState } from 'react';
import useLogin from "../../../hook/userHook/Login.hook"
import Home from '../Home/Home';
import Menu from '../../../components/menu';

const Adminlogin = () => {
    const [showPass, setShowPass] = useState(false);
    const {Submit,handleChange,clearData, data} = useLogin();

    return (
        <IonPage >
            <IonContent fullscreen>
                <IonImg src={logo} />
                <IonGrid className='grid'>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                type='text'
                                name='username'
                                value={data.username}
                                placeholder="User Name"
                                onIonChange={handleChange}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                type={showPass ? 'text' : 'password'}
                                name='password'
                                value={data.password}
                                placeholder="Password"
                                onIonChange={handleChange}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonCheckbox slot='start' onClick={() => setShowPass(!showPass)}></IonCheckbox>
                                <IonLabel>Show Password</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='6'>
                            <Button
                                color="warning"
                                click={Submit}
                                classes='button'
                                btnName='Login' />
                        </IonCol>
                        <IonCol size='6'>
                            <Link to={"/signup"} ><Button color="warning" click={clearData} classes='button' btnName='Sign Up' /></Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Adminlogin;