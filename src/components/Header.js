import { IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonLabel, IonMenuButton, IonRoute, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router';
import {App} from '@capacitor/app'




const Header = ({ titleName }) => {
    const history = useNavigate()
    
    const [presentAlert] = useIonAlert();
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        history("/login")
        App.exitApp()
    }
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonGrid>
                    <IonRow>

                        <IonCol size='10'>
                            <IonTitle>{titleName}</IonTitle>
                        </IonCol>
                        <IonCol size='2'>
                            <IonIcon onClick={() =>
                            presentAlert({
                                header: 'Are you sure Exit App!',
                                cssClass: 'custom-alert',
                                buttons: [
                                    {
                                        text: 'No',
                                        role: 'cancel',
                                        cssClass: 'alert-button-cancel',
                                       
                                    },
                                    {
                                        text: 'Yes',
                                        role: 'confirm',
                                        cssClass: 'alert-button-cancel',
                                        handler: () => {
                                           logout()
                                        },
                                    },
                                ],
                               
                            })} src={logOutOutline} />
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
