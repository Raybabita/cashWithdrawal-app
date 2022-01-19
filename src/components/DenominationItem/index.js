// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item-container">
      <button
        type="button"
        className="denomination-button"
        onClick={onUpdateBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
