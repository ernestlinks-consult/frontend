export default function Create_account() {
  return (
    <div className="create-account">
      <div className="head">
        <h1>Create Account</h1>
        <p>
          Enter your email below. We'll send you a code to complete your
          sign-up.
        </p>
      </div>

      {/* input textboxes */}
      <div className="inputs">
        <input type="text" placeholder="First Name" hidden />
        <input type="text" placeholder="Last Name" hidden />
        <input type="date" placeholder="mm/dd/yyyy" hidden />
        <input type="email" placeholder="✉️ Email" />
        <input type="password" placeholder="Password" hidden />
        <input type="password" placeholder="Confirm Password" hidden />
      </div>

      <div className="text">
        <p>
          Already have an account? <a href="/">Click here!</a>
        </p>
      </div>
      {/* sign up button */}
      <div className="signup-button">
        <button type="submit">Signup</button>
      </div>
    </div>
  );
}
