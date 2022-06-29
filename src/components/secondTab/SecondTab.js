import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import './SecondTab.css';
const SecondTab=()=> {
    let checkedBankData = useSelector((state) => state.checkedBank);
    console.log("checkedBankData", checkedBankData);
    // useEffect(()=>{
    //     console.log("chekdnkfef");
    // },[checkedBankData])
    return (
   <div>
            {checkedBankData.length == 0 && <p className="secondTabPara">
                You have not selected any bank
            </p>
            }
          {checkedBankData.map((item) => {
              return (
                  <>
                  <div key={item.id} className="firstInnerDivFirstTab">
                  <div className="secondInnerDivFirstTab">
                  <div className="thirdInnerDivFirstTab">
                  <h3>
                  {item.name}
                  </h3>
                  {
                      item.opening_hours.open_now ?
                      <p className="openBankFirstTab">
                      open now
                      </p>
                      :
                      <p className="closeBankFirstTab">
                      closed
                      </p>
                    }
                    <p className="ratingFirstTab">
                    
                    Rating : {item.rating} ⭐
                    </p>
                    </div>
                    </div>
                    <p>
                    {item.vicinity}
                    
                    </p>
                    </div>
                    
                    </>
              )
          })}
   </div>
  )
}

export default SecondTab