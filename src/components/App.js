import React, { useState } from 'react'
import AppContext from '../context/app-context'
import Header from './Header'
import Form from './Form'

const App = () => {
  const [operation, setOperation] = useState('bin2dec')

  const onSwitchOperation = () => {
    operation === 'bin2dec' ? setOperation('dec2bin') : setOperation('bin2dec')
  }

  return (
    <AppContext.Provider value={{ operation, onSwitchOperation }}>
      <div className="container">
        <Header />
        <Form />
      </div>
    </AppContext.Provider>
  )
}

export { App as default }
