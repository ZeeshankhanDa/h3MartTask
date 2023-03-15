import React, { Component } from "react";
import "./CurrMarketInfo.css";


export class CurrMarketInfo extends Component {

  render(){
    return(
      <section>
            <div className="marketInfo">
               <div className="market__details flex__col">
                 <span>MARKET CAP</span>
                 <span>$1.33T</span>
               </div>
               <div className="market__details flex__col">
                 <span>EXCHANGE VOL</span>
                 <span>$74.50B</span>
               </div>
               <div className="market__details flex__col">
                 <span>ASSETS</span>
                 <span>2,295</span>
               </div>
               <div className="market__details flex__col">
                 <span>EXCHANGES</span>
                 <span>73</span>
               </div>
               <div className="market__details flex__col">
                 <span>MARKETS</span>
                 <span>14,759</span>
               </div>
               <div className="market__details flex__col">
                 <span>BTC DOM INDEX</span>
                 <span>33.4%</span>
               </div>
             </div>
           </section>
    )
  }
}

