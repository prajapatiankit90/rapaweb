import { IonContent, IonPage, IonImg,} from '@ionic/react';
import './Home.css';
import home from "../../../assets/images/logo.png"
import Header from '../../../components/Header';

const Home = () => {
  

  return (
    <IonPage>
      <Header titleName="Home" />
      <IonContent fullscreen>
  
        <IonImg src={home} />
      </IonContent>
    </IonPage>
  )
};

export default Home;
