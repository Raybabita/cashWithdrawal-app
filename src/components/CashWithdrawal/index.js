// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    const {balance} = this.state
    if (balance > 0) {
      this.setState(preState => ({
        balance: preState.balance - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-detail-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance} <br />
              <span className="in-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdrawal">Withdrawal</p>
          <p className="choose-sum-in-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-item-container ">
            {denominationsList.map(eachDenominationItem => (
              <DenominationItem
                denominationsDetails={eachDenominationItem}
                key={eachDenominationItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
