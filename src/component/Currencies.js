import React from "react"
import Currency from "./Currency"

const CurrenciesList=({data}) => {
    return(
        <div className="cardlist">
            {data.map((item, id) => {
                return (
                    <Currency  key={id} data={item} />
                )
            })}    
        </div>
    )
}

export default CurrenciesList;