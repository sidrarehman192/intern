import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import backgroundimage from '../image/Website.jpg
import backgroundimage from '../image/bio.jpg'
class About extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //   }
  //   this.handlelogin = this.handlelogin.bind(this)
  // }
  // handlelogin(){
  //   console.log(this.state)
  // }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="about-grid">
               <div className="banner-1text">
              <h1>About Sidra</h1>

            <hr/>
            <div><img className = 'bg' src = {backgroundimage}/>
            {/* <button type = "contact" onClick ={this.handlelogin} > contact </button> */}
            </div>
           
 </div>
            {/* </Cell> */}
        </Grid>
        </div>
    )
  }
}

export default About;