import { Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CandidateDetail from './CandidateDetail'
import { Candidate } from './Candidate'
import { AboutUs } from './AboutUs'
import Form from './Form'
import Slider from './Slider'
import Nav from './Nav'
import '../css/formCss.css';
import '../css/css.css';
import '../css/button.css';


export class Home extends Component {
    render() {
        return (
            <div className='container-fluid container'>

                <Slider />
                <Nav />
                <Routes >
                    <Route path='/' element={<Form />}></Route>
                    <Route path='/Candidate' element={<Candidate candidate={this.props.state.data[0]} />}></Route>
                    <Route path='Candidate/CandidateDetail/:id' element={<CandidateDetail candidatedetail={this.props.state.data[0]} />}></Route>
                    <Route path='/AboutUs' element={<AboutUs />}></Route>
                </Routes>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { state };
}
export default connect(mapStateToProps)(Home)

