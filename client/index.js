import React from 'react';
import ReactDom from 'react-dom';
import Description from './description.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null
    }
  }

  componentDidMount() {
    //let id = Number(window.location.pathname.replace(/\//, ''));

    let id = Math.floor(Math.random() * 10000000);


    fetch(`http://localhost:3000/data/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);

          this.setState({
            isLoaded: true,
            description: result
          })
        //console.log(this.state.description)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    if (this.state.description) {
    return (
      <div id="description">
        <Description description={this.state.description}/>
      </div>
      )
   } else {
    return (
      <div> Loading... </div>
      )
   }
  }
}


ReactDom.render(<App />, document.getElementById('description'));