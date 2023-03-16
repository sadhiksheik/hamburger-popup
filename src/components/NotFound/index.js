// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-container">
      <img
        className="not-image"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1 className="not-heading">Lost Your Way?</h1>
      <p className="para">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)
export default NotFound
