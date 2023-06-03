// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onBtnChange = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonTxt = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const onChange = this.getButtonTxt()
    return (
      <div className="container">
        <h1 className="main-head">Welcome</h1>
        <p className="des">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onBtnChange}>
          {onChange}
        </button>
      </div>
    )
  }
}
export default Welcome
