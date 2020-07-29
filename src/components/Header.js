import React, { useContext } from 'react'
import AppContext from '../context/app-context'

const Header = () => {
  const { operation } = useContext(AppContext)

  return (
    <div className="header">
      <p className="header__welcome">Welcome to</p>
      <h1 className="header__app-name">
        {operation === 'bin2dec' ? 'Bin2Dec' : 'Dec2Bin'}
      </h1>
    </div>
  )
}

export { Header as default }
