import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [hourHand,updateHourHand] =  useState("")
  const [minuteHand,updateMinuteHand] =  useState("")
  const [secondHand,updateSecondHand] =  useState(new Date())

  useEffect(()=>{
   
  const timer = setInterval(()=>{
      updateSecondHand(secondHand + 1); 
    },10000);
//  console.log("getTime",timer)
const getMinute = 60000; 
const chckMinute = new Date().getMinutes();
// console.log("chckMinute",chckMinute)
if (timer == getMinute) {
  updateMinuteHand()
}
  },[secondHand])
  return (
    <>
      <div className='container'>
        <div className='container-fluid'>
          
          
          <div className='clock'>
            <div className='clockMinutes'>
              <div className=''>

              </div>
            </div>
          
          </div>
       
        </div>


      </div>
    </>
  )
}

export default App
