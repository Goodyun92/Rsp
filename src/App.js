import './App.css';
import { useState, useEffect } from 'react';
import Box from './components/Box';
import Pap from './img/Pap.png';
import Rock from './img/Rock.png';
import Sci from './img/Sci.png';

function App() {

  // 1:rock
  // 2:sci
  // 3:pap

  const [myHand, setMyHand] = useState(0);
  const [comHand, setComHand] = useState(0);
  const [result, setResult] = useState("Ready...");

  useEffect( ()=>{
    if(myHand>0){
      if(comHand===myHand) setResult("Draw");
      else if((myHand===2 && comHand ===3)||(myHand===1 && comHand ===2)||
      (myHand===3 && comHand ===1))
      setResult("Win!!!");
      else setResult("Lose...");
      console.log({result})
    }
  }, [myHand])

  const clickHand = (hand) => {
    setMyHand(hand)
    setComHand(parseInt((Math.random()*(3)))+1)
  }
  
  return (
    <div className='container'>

      <div className='boxList'>
        <Box title="USER" hand={myHand}/>
        <Box title="COMPUTER" hand={comHand}/>
      </div>

      <div className='result'>
        {result}
      </div>

      {/* 온클릭에 화살표함수 쓰니까 too many rerender 오류 해결... */}
      <div className='buttonList'>
        <button className='button' onClick = {()=>clickHand(2)}><img className='buttonImg' src={Sci} /></button>
        <button className='button' onClick={()=> clickHand(1)}><img className='buttonImg' src={Rock} /></button>
        <button className='button' onClick = {()=>clickHand(3)}><img className='buttonImg' src={Pap} /></button>
      </div>

    </div>
  );
}

export default App;
