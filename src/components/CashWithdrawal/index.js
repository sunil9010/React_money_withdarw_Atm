// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  UpdatedBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const firstName = name.slice(0, 1)
    const {amount} = this.state

    return (
      <div className="app-container">
        <div className="cashWidth-container">
          <div className="naming-container">
            <div className="person-info">
              <p className="letter">{firstName}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="heading">Your Balance</p>
            <div>
              <p className="balance">{amount}</p>
              <br />
              <span className="description">In Rupees</span>
            </div>
          </div>
          <p className="balance1">Withdraw</p>
          <p className="heading1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="demoList">
            {denominationsList.map(eachElement => (
              <DenominationItem
                key={eachElement.id}
                denominationDetails={eachElement}
                UpdatedBalance={this.UpdatedBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
