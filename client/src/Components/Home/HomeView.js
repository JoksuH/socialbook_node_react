import MainContent from './../MainContent/Maincontent'
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
      </>

  );
}

export default HomeView;
