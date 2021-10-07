import React from 'react'
// import coins from '../components/Contact'
function Popup({ setOpenModal }) {
    return (
        <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>You have 100 coins</h1>
          </div>
          
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              close
            </button>
          </div>
        </div>
      </div>
    )
}

export default Popup
