import React from 'react'

function Animate() {
    return (
        <div>
            <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .main {\n      width: 500px;\n      height: 350px;\n         border-color: #EEE;\n      border-radius: 10px;\n      border-width: 2px;\n\n      display: grid;\n      justify-content: center;\n      align-content: center;\n    }\n\n    .main > * {\n      grid-column: 1;\n      grid-row: 1;\n    }\n\n        .orange img {\n      width: 50px;\n      display: block;\n      margin: 0 auto;\n      margin-top: 50px;\n    }\n\n    .item {\n     margin: auto;\n height: 100%; \n width:0%;\n animation: spinAround 15s linear infinite;\n    }\n\n    .main > * > img {\n      animation: rotate 5s linear infinite;\n    }\n\n    @keyframes rotate {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinAround {\n      from {\n        transform: rotate(0deg) translate(140px) scale(.7);\n      }\n      to {\n        transform: rotate(360deg) translate(140px) scale(.7);\n      }\n    }\n  ",
          }}
        />
        <div className="main">
          <img
            className="theSmiley"
            src="./header1.svg"
            style={{width:"36vw"}}
          />
        {/* <img src="./Hero Image.svg"  className="theSmiley" style={{position:'absolute',width:"50%",left: '36vw',top: '-8vh'}}/> */}
          <div className="item" style={{ animationDelay: "-3s" }}>
            <img src="./roll1.svg" />
          </div>
       
          <div className="item" style={{ animationDelay: "-6s" }}>
            <img src="./roll2.png" />
          </div>
         
          <div className="item" style={{ animationDelay: "-9s" }}>
            <img src="./roll3.svg" />
          </div>
         
          <div className="item" style={{ animationDelay: "-12s" }}>
            <img src="./roll4.svg" />
          </div>
       
          <div className="item" style={{ animationDelay: "-15s" }}>
            <img src="./roll5.svg" />
          </div>
        </div>
       
      </div>
        </div>
    )
}

export default Animate
