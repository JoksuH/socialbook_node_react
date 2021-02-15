import MainContent from './../MainContent/Maincontent'
import Rightsidebar from './../Rightsidebar/Rightsidebar';
import { useHistory } from 'react-router-dom'


const HomeView = () => {

  const History = useHistory()

  let userName = '';

  let location = History.location.pathname;
  if (History.location.pathname !== '/') {
       userName = location.split('/')[2]
  }
  else userName = '';

  return (
      <>
        <MainContent userName={userName}/>
        <Rightsidebar />
      </>

  );
}

export default HomeView;
