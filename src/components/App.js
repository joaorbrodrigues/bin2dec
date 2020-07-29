import React, { useState } from 'react'

const App = () => {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState('')
  const [result, setResult] = useState('')
  const [operation, setOperation] = useState('bin2dec')

  const onBinaryChange = (e) => {
    const binary = e.target.value
    if (!binary || binary.match(/^[0-1]{1,8}$/)) {
      setBinary(binary)
      convertBin2Dec(binary)
    }
  }

  const onDecimalChange = (e) => {
    const decimal = e.target.value
    if (!decimal || decimal.match(/^[0-9]{1,5}$/)) {
      setDecimal(decimal)
      if (decimal <= 65535) {
        setResult(decimal)
        convertDec2Bin(decimal)
      } else {
        setResult('Max is 65535')
      }
    }
  }

  const convertBin2Dec = (bin) => {
    let binValues = [...bin].map((n) => +n)
    let mapResult = binValues.reverse().map((binValue, index) => {
      return binValue * Math.pow(2, index)
    })
    const sum = mapResult.reduce((a, b) => a + b, 0)
    setResult(sum)
  }

  const convertDec2Bin = (dec = 0) => {
    let currentBit = Math.floor(Math.log(dec) / Math.log(2))
    if (Number.isFinite(currentBit)) {
      const iterations = currentBit + 1
      const bitArray = '0'
        .repeat(iterations)
        .split('')
        .map((n) => +n)
      while (dec > 0) {
        dec = dec - Math.pow(2, currentBit)
        bitArray[currentBit] = 1
        currentBit = Math.floor(Math.log(dec) / Math.log(2))
      }
      bitArray.reverse()
      setResult(bitArray)
    }
  }

  const onSwitchOperation = () => {
    operation === 'bin2dec' ? setOperation('dec2bin') : setOperation('bin2dec')
    setResult('')
    setBinary('')
    setDecimal('')
  }

  return (
    <>
      {operation === 'bin2dec' ? (
        <div className="container">
          <div className="header">
            <p className="header__welcome">Welcome to</p>
            <h1 className="header__app-name">Bin2Dec</h1>
          </div>
          <div className="form">
            <p className="form__text">Enter binary value to get the decimal</p>

            <input
              className="form__input"
              value={binary}
              onChange={onBinaryChange}
            />
            <div className="form__result">{result}</div>

            <button className="btn" onClick={onSwitchOperation}>
              Switch to Dec2Bin &nbsp; &rarr;
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="header">
            <p className="header__welcome">Welcome to</p>
            <h1 className="header__app-name">Dec2Bin</h1>
          </div>
          <div className="form">
            <p className="form__text">Enter decimal value to get the binary</p>

            <input
              className="form__input"
              value={decimal}
              onChange={onDecimalChange}
            />
            <div className="form__result">{result}</div>

            <button className="btn" onClick={onSwitchOperation}>
              &larr; &nbsp; Switch to Bin2Dec
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export { App as default }
