import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, } from 'react-router-dom'


export default function CandidateDetail(props) {
    const params = useParams();
    return (
        <div style={{ display: "grid", justifyContent: "center" }}>
            <div style={{ width: "500px", height: "300px", border: "2px solid black", borderRadius: "10%", display: 'grid', justifyContent: "center", alignItems: "center", alignContent: "center", margin: "20px 0px" }}>
                <span style={{ textAlign: "center" }}><h1>{props.candidatedetail[params.id - 1].name}</h1></span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <span>Phone:</span>
                    <span>{props.candidatedetail[params.id - 1].phone}</span>
                    <span>Email:</span>
                    <span>{props.candidatedetail[params.id - 1].email}</span>
                    <span>WebSite:</span>
                    <span>{props.candidatedetail[params.id - 1].website}</span>
                </div>
                <hr></hr>
                <span style={{ textAlign: "center" }}><Link to={"/Candidate"} className='button-8'>Back To Candidate</Link></span>
            </div>
        </div>
    )
}

