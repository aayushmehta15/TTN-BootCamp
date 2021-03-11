import React, {Component} from "react"
import './App.css';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      data: [ ]
    };
    
    this.onChangeBtn = this.onChangeBtn.bind(this);
    this.onSubmitBtn = this.onSubmitBtn.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.pressEnterHandler = this.pressEnterHandler.bind(this);
    }
  
  onChangeBtn(event) {
    this.setState({value: event.target.value})  
  }
  // On pressing Submit button
  onSubmitBtn(event) {
    if (this.state.value!=="")
    {
      let inputData = this.state.value;
      const [fname, qty] = inputData.split('-');
      const setInputData = { f: fname, q: qty }
      if (this.state.data.length <= 0) {
        this.setState({ data: [setInputData] })
        console.log(this.state.data);
      } else {
        this.setState({ data: [...this.state.data, setInputData] })
        console.log(this.state.data);
      }
      // Once pressed enter the input field get clean
      this.setState({
        value:""
      })
    }
  }
  // On pressing Enter
  pressEnterHandler(event){
    if(event.key === 'Enter')
    {
      this.onSubmitBtn(event);
      this.setState({ value:"" });
    }
  }
  // On clicking delete
  onClickDelete(index) {
    let array = this.state.data;
    array.splice(index, 1);
    this.setState({data: array})
  }

  render() {
    return (
      <div className="App">
        <div>
        <label> Fruit Name and Quatity:
          <input type="text" name="name" placeholder="FruitName-Quantity" 
          value={this.state.value} onChange={this.onChangeBtn} onKeyDown={this.pressEnterHandler}/>
          </label>
          <br/><br/>
          <input type="submit" value="Submit" onClick={this.onSubmitBtn} />
        </div>

        {/* Table  */}
        <table>
          <thead>
            <tr>
              <th>Name</th> <th>Qty</th> <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.data.map((item,index) => (
              <tr key={index}>
                <td>{item.f}</td>
                <td>{item.q}</td>
                <td onClick={()=>this.onClickDelete(index)}> Delete </td>
              </tr>
              ))
            }
          </tbody>
          </table>

      </div>
    );
  }
}

export default App;