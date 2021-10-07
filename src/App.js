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
import work from './assets/icon-work.svg' ;
import exercise from './assets/icon-exercise.svg' ;
import ellipsis from './assets/icon-ellipsis.svg' ;
import play from './assets/icon-play.svg' ;
import social from './assets/icon-social.svg' ;
import study from './assets/icon-study.svg' ;
import selfCare from './assets/icon-self-care.svg' ;

const images = [ work , play ,study, exercise,social, selfCare] ;
const dates = ["Daily" , "Weekly" , "Monthly"] ;

function App() {
  const [ info , setInfo ] = useState([]) ;
  const [ time , setTime ] = useState("weekly") ;
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
			  {
				  dates.map((item , index) => (
					<DateInfoSpan key={index} onClick={() => setTime(item.toLowerCase())} active={time === item.toLowerCase()}>{item}</DateInfoSpan>
				  ))
			  }
          </DateInfo>

        </BigContainer>

       { info ? info.map((item, index) => (
        <SmallContainer key={index} index={index} >
			<SmallContainerDesign >
				<img src={images[index]} alt='work' />
			</SmallContainerDesign>

			<SmallContainerInfo>
				<div className="top">
					<h3>{item.title}</h3>
					<IconButton sx={{color: "white"}}>
						<MoreHorizIcon sx={{color: "white"}} />
					</IconButton>
				</div>
				<div className="bottom">
					<h1>{item.timeframes[time].current}hrs</h1>
					<p>Last {time !=="daily" ? time.charAt(0).toUpperCase() + time.slice(1).replace("ly" , "") : "Day"} - {item.timeframes[time].previous}hrs</p>
				</div>
			</SmallContainerInfo>
           
        </SmallContainer>
       )) : null } 

      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
