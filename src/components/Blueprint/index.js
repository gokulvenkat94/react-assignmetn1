import './index.css'

const HistoryData = props => {
  const {historydetails, deletehistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historydetails

  const deleted = () => {
    deletehistory(id)
  }

  return (
    <li className="white" shadow>
      <div className="rox">
        <p>{timeAccessed}</p>

        <img src={logoUrl} className="size" alt="domain logo" />

        <p>{title}</p>
        <p>{domainUrl}</p>
        <button type="button" testid="delete" onClick={deleted}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="size"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryData
