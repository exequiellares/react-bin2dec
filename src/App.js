import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decimalConverted } from "./store";
import './App.css';

const BinaryInput = () => {
  const dispatch = useDispatch()
  const [binary, setBinary] = useState('')
  const [error, setError] = useState('')

  const onBinaryChange = e => {
    let aux = e.target.value
    let validBinary = /^[01]+$/.test(aux)
    const maxLenght = 256
    if (aux === '' || (validBinary && aux.length <= maxLenght)) {
      setBinary(aux)
      setError('')
      let decimal = parseInt(aux, 2)
      dispatch(decimalConverted(decimal))
    } else if (!validBinary) {
      setError('Only digits 0 or 1 are allowed')
    }
  }

  return (
    <section>
      {error ? (<div className="error">{error}</div>) : null}
      <h3>Binary</h3>
      <form>
        <input name="binaryInput" type="number" value={binary} onChange={onBinaryChange} />
      </form>
    </section>
  )
}

const DecimalValue = () => {
  const value = useSelector(state => state.converted.val)
  return (
    <section>
      <h3>Decimal</h3>
      <input type="number" disabled value={value} />
    </section>
  )
}

function App() {
  return (
    <section>
      <h1>Binary to Decimal</h1>
      <BinaryInput />
      <DecimalValue />
    </section>
  );
}

export default App;
