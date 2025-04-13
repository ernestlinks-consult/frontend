export default function Login() {
  return (
    <div className="create-account">
      <div className="head">
        <h1>Login</h1>
        <p>Already have an account? Click here!</p>
      </div>
      <div className="inputs">
        <input type="text" placeholder="First Name" hidden />
        <input type="text" placeholder="Last Name" hidden />
        <input type="date" placeholder="mm/dd/yyyy" hidden />
        <input type="email" placeholder="✉️ Email" />
        <input type="password" placeholder="Password" hidden />
        <input type="password" placeholder="Confirm Password" hidden />
      </div>
      <div className="buttons">
        <button className="one">Verify with Phone</button>
        <button className="two">Verify with Email</button>
        {/* <div className="text resend">
          <p>Resend passcode</p>
        </div> */}
      </div>
      <div className="text">
        <p>
          Already have an account? <a href="/">Click here!</a>
        </p>
      </div>
      <div className="signup-button">
        <button type="submit" className="submit">
          Signup
        </button>
      </div>
    </div>
  );
}
