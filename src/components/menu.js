import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import "../App.css";
import { calculatorOutline, homeOutline, logOutOutline } from 'ionicons/icons'
import { App } from '@capacitor/app'



const Menu = ({ titleName }) => {

    const history = useHistory();
    const [presentAlert] = useIonAlert();
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        history.push("/login")
        App.exitApp()

    }

    return (
        <IonMenu contentId={titleName}>
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Main Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonMenuToggle autoHide={false}>
                    <IonList>
                        <NavLink className="menu" to={"/home"}><IonItem detail ><IonLabel><IonIcon className='menu-icon' src={homeOutline} />Home</IonLabel></IonItem></NavLink>
                        <NavLink className="menu" to={"/calc"}><IonItem detail ><IonLabel><IonIcon className='menu-icon' src={calculatorOutline} />Calculator</IonLabel></IonItem></NavLink>
                        <IonItem detail className='menu' onClick={() =>
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
                                        cssClass: 'alert-button-confirm',
                                        handler: () => {
                                           logout()
                                        },
                                    },
                                ],
                               
                            })
                        }><IonLabel><IonIcon src={logOutOutline} /> Log out</IonLabel></IonItem>
                    </IonList>
                </IonMenuToggle>

            </IonContent>
        </IonMenu>
    );
};

export default Menu;
