import React from 'react';
import './About.scss';
import $ from 'jquery'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  scale = (e) => {
    // console.log(e.target.offsetX)
    // console.log(e.target.offsetY)
    e.persist()
    console.log(e)
    // $('.detail_wrapper').css({
    //   left: e.target.offsetLeft,
    //   top: e.target.offsetTop,
      
    // })
    $('.detail').css({
      left: e.target.offsetLeft,
      top: e.target.offsetTop,
      width: 500,
      height: 240,
      transform: `translate(${e.target.offsetLeft}px, ${e.target.offsetTop}px)`
    })
  }
  // scale() {
  //   console.log(e)
  //   // console.log(e.target.offsetX)
  //   // console.log(e.target.offsetY)
  //   // console.log(this)
  //   // console.log($(this).offset())
  // }
  handle = (e) => {
    e.persist()
    console.log(e)
  }
  render() {
    return (
      <div className='about-container'>
        <div className='detail_wrapper'>
        </div>
        <div className='all_date'>
          <div className='detail'></div>
        {
          Array(30).fill(0).map((val, i) => {
            return (
              <div onClick={this.scale} key={i} className='date'>{i + 1} 日</div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default About;