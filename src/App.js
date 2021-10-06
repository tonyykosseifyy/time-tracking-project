import { useState , useEffect } from 'react' ;
import './App.css';
import 
{ 
	AppWrapper , ContentWrapper , BigContainer , 
	UserInfo , DateInfo , DateInfoSpan , SmallContainer , 
	SmallContainerInfo , SmallContainerDesign 
} 
from './components' ;
import JeremyImage from './assets/image-jeremy.png' ;
import axios from "./axios" ;
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

function App() {
  const [ info , setInfo ] = useState([]) ;
  useEffect(() => {
    axios.get("/api/user")
    .then(({ data }) => setInfo(data))
    .catch((error) => console.log(error))
  }, [])
  console.log(info)
  return (
    <AppWrapper>
      <ContentWrapper>
        <BigContainer>
          <UserInfo>
            <img src={JeremyImage} alt="Jeremy Robson" />
            <div>
              <span>Report For</span>
              <h1>Jeremy <br/> Robson</h1>
            </div>
            
          </UserInfo>

          <DateInfo>
            <DateInfoSpan>Daily</DateInfoSpan>
            <DateInfoSpan>Weekly</DateInfoSpan>
            <DateInfoSpan>Monthly</DateInfoSpan>
          </DateInfo>

        </BigContainer>

       { info ? info.map((item, index) => (
        <SmallContainer key={index} index={index} >
			<SmallContainerDesign >

			</SmallContainerDesign>
           	<SmallContainerInfo>
				<div className="top">
					<h3>{item.title}</h3>
					<IconButton>
						<MoreHorizIcon />
					</IconButton>
				</div>
				<div className="bottom">

				</div>
			</SmallContainerInfo>
           
        </SmallContainer>
       )) : null } 

      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
