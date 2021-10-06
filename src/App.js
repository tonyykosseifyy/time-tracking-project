import { useState , useEffect } from 'react' ;
import './App.css';
import { AppWrapper , ContentWrapper , BigContainer , UserInfo , DataInfo, DateInfo } from './components' ;
import JeremyImage from './assets/image-jeremy.png' ;
import axios from "./axios" ;


function App() {
  const [ data , setData ] = useState({}) ;
  useEffect(() => {
    axios.get("/api/user")
    .then(({ data }) => console.log(data))
    .catch((error) => console.log(error))
  }, [])
  return (
    <AppWrapper>
      <ContentWrapper>
        <BigContainer>
          <UserInfo>
            <img src={JeremyImage} alt="Jeremy Robson" />
            <span>Report For</span>
            <h1>Jeremy <br/> Robson</h1>
          </UserInfo>

          <DateInfo>

          </DateInfo>
        </BigContainer>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
