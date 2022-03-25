import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/action'

export class AboutUs extends Component {
  render() {
    return (
      <div className='mainAbout'>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <div style={{width: "500px", height: "300px", border: "2px solid black", borderRadius: "10%", display: 'grid', justifyContent: "center", alignItems: "center", alignContent: "center", }}>
            <span style={{ textAlign: "center" }}><h1>About Us</h1></span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <span>Company Name:</span>
              <span>Lorem Ipsum</span>
              <span>Company Email:</span>
              <span>Lorem Ipsum</span>
              <span>Company WebSite:</span>
              <span>Lorem Ipsum</span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { getData }

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)