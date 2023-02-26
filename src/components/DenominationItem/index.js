// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, UpdatedBalance} = props
  const {value} = denominationDetails

  const doneDenominations = () => {
    UpdatedBalance(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="buttons" onClick={doneDenominations}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
