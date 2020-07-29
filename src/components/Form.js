import React, { useState, useContext } from 'react'
import AppContext from '../context/app-context'

const Header = () => {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState('')
  const [result, setResult] = useState('')
  const { operation, onSwitchOperation } = useContext(AppContext)

  const onBinaryChange = (e) => {
    const binary = e.target.value
    if (!binary || binary.match(/^[0-1]{1,16}$/)) {
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

  return (
    <div className="form">
      {operation === 'bin2dec' ? (
        <>
          <p className="form__text">Enter binary value to get the decimal</p>
          <input
            className="form__input"
            value={binary}
            onChange={onBinaryChange}
          />
        </>
      ) : (
        <>
          <p className="form__text">Enter decimal value to get the binary</p>

          <input
            className="form__input"
            value={decimal}
            onChange={onDecimalChange}
          />
        </>
      )}
      <div className="form__result">{result}</div>

      <button
        className="btn"
        onClick={() => {
          onSwitchOperation()
          setBinary('')
          setDecimal('')
          setResult('')
        }}
      >
        {operation === 'bin2dec'
          ? 'Switch to Dec2Bin \u00A0 \u2192'
          : '\u2190 \u00A0 Switch to Bin2Dec'}
      </button>
    </div>
  )
}

export { Header as default }
