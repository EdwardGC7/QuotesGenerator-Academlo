import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'



const QuoteBox = ({quoteList, position}) => {

  return (
    <div className='quoteBox-quote'>
      <FontAwesomeIcon icon={faQuoteLeft} className='FAIcon'/>
      <div><p>{quoteList[position].quote}</p></div>
      <span>{quoteList[position].author}</span>
    </div>
  )
}

export default QuoteBox