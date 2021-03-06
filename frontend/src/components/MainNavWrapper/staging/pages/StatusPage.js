import React from 'react'
import _ from 'lodash'
import Validated from './Validated'
import NotValidated from './NotValidated'
import GoCheck from 'react-icons/lib/go/check'
import GoX from 'react-icons/lib/go/x'

// TODO: COME BACK AND REFACTOR THIS PAGE

export default function StatusPage({
  status
}){
  
  return (
    <div className="statusPage" style={{ marginLeft: "2%", marginTop: "2%" }}>
      
      {
        !!_.includes(status, false) ? <NotValidated /> : <Validated />
      }

      {
        status.quoteSent ?
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Quote Sent</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#4CC941" }}><GoCheck size={20}/></span>
        </div>
          :
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Quote Sent</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#CB2424" }}><GoX size={20} /></span>
        </div>
        
      }
      {
        status.quoteAccepted ?
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Quote Accepted</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#4CC941" }}><GoCheck size={20}/></span>
        </div>
          :
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Quote Accepted</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#CB2424" }}><GoX size={20} /></span>
        </div>
      }
      {
        status.idVerified ?
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Id Verified</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#4CC941" }}><GoCheck size={20}/></span>
        </div>
        :
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Id Verified</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#CB2424" }}><GoX size={20} /></span>
        </div>
      }
      {
        status.depositCleared ?
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Deposit Cleared</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#4CC941" }}><GoCheck size={20}/></span>
        </div>
        :
        <div style={{ display: "flex", width: "25%" }}>
          <h3 style={{ flexDirection: "row", width: "75%" }}>Deposit Cleared</h3><span style={{ flexDirection: "row", width: "10%", margin: "auto 0 9px", color: "#CB2424" }}><GoX size={20} /></span>
        </div>
      }
    </div>
  )
}

