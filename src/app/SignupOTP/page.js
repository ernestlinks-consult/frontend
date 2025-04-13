import Bubble from "../../images/Signup/speech bubble with notification.png";
export default function DesktopOtp() {
  return (
    <div className="create-account">
      <div className="signupotpConttainer">
        <h1>We can’t wait to set you up</h1>
        <div className="bubble-img">
          <img
            src={Bubble}
            alt="bubble"
            width={150}
            className="bubbleico"
          ></img>
        </div>
        <div className="text">
          <p>We just sent you a passcode.</p>
          <p>Please enter the passcode we sent to e*********2@gmail.com</p>
        </div>
        <div className="otp-numbers">
          <input className="otpNum" maxLength={1}></input>
          <input className="otpNum" maxLength={1}></input>
          <input className="otpNum" maxLength={1}></input>
          <input className="otpNum" maxLength={1}></input>
        </div>
        <div className="buttons">
          <button className="one">Verify with Phone</button>
          <div className="text resend">
            <p>Resend passcode</p>
          </div>
        </div>
        <div className="text">
          <p>
            Already have an account? <a href="/">Click here!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
