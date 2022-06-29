import React, { useEffect, useState } from 'react'
import MapContainer from './MapContainer'
import './FirstTab.css'
import { Checkbox } from 'antd';
import { useDispatch } from "react-redux";
import { checkedBank } from "../redux/action/index";


function FirstTab() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [allBankData, setAllBankData] = useState([]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates)
    }
  }, [])
  const dispatch = useDispatch();

  const getCoordinates = (coordinates) => {
    setLatitude(coordinates.coords.latitude);
    setLongitude(coordinates.coords.longitude);
  }
  const passingBankData = (bankData) => {
    setAllBankData(bankData)
  }
  const checkBoxChanged=(e,item)=>{
    const newData = allBankData.map(selected =>{
      if(selected.id == item.id){
        if(item.checked){
          item.checked=false;
        }else{
          item.checked = true;
        }
        return item;
      }
      return selected; 
    })

    const checkedBankFill = allBankData.filter(item => item.checked)
    dispatch(checkedBank(checkedBankFill));

    setAllBankData(newData);
  }
  console.log("allBankData", allBankData)
  // {
  //     "business_status": "OPERATIONAL",
  //         "geometry": {
  //         "location": {
  //             "lat": 19.1144066,
  //                 "lng": 72.89872299999999
  //         },
  //         "viewport": {
  //             "northeast": {
  //                 "lat": 19.11575987989272,
  //                     "lng": 72.90007407989272
  //             },
  //             "southwest": {
  //                 "lat": 19.11306022010728,
  //                     "lng": 72.89737442010727
  //             }
  //         }
  //     },
  //     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bank-71.png",
  //         "icon_background_color": "#909CE1",
  //             "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bank-intl_pinlet",
  //                 "name": "HDFC Bank",
  //                     "opening_hours": {
  //         "open_now": false
  //     },
  //     "photos": [
  //         {
  //             "height": 4640,
  //             "html_attributions": [
  //                 "<a href=\"https://maps.google.com/maps/contrib/107634447792780311433\">Asad Khan</a>"
  //             ],
  //             "photo_reference": "Aap_uECxMGub8xvw7KF6ONVWsaybbZAshRrbSgm47nIydMLgsrlInbBQeaKO_SjWRWpFdCWODxi-s4tfPjDoASvxGxJCHWnPM17gmzYwsv7Qa4mgsTikhUQmFOQAERaAREztkcK5VBd4VXwRTcFM4C9h8KeEsz9FldAb0af_ptiq1W3uK1x0",
  //             "width": 3480
  //         }
  //     ],
  //         "place_id": "ChIJrdd1dwrI5zsRufI6EzfH7w0",
  //             "plus_code": {
  //         "compound_code": "4V7X+QG Mumbai, Maharashtra",
  //             "global_code": "7JFJ4V7X+QG"
  //     },
  //     "rating": 3.6,
  //         "reference": "ChIJrdd1dwrI5zsRufI6EzfH7w0",
  //             "scope": "GOOGLE",
  //                 "types": [
  //                     "bank",
  //                     "atm",
  //                     "finance",
  //                     "point_of_interest",
  //                     "establishment"
  //                 ],
  //                     "user_ratings_total": 36,
  //                         "vicinity": "Sheldon Apartment, PN 37, Gr Floor & 1st Floor, Chandivali Farm Rd, Mumbai"
  // }

  return (
    <div>
      <div className='mapContainerDiv'>

        <MapContainer
          latitude={latitude}
          longitude={longitude}
          passingBankData={passingBankData}
        />
      </div>
      {allBankData.map((item) => {

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
                <div>

                  <Checkbox 
                  checked={item.checked} 
                  className='checkBoxFirstTab'
                  onChange={(e)=> checkBoxChanged(e, item)}
                  />
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

export default FirstTab