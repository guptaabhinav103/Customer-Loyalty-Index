import React from 'react'

function Login() {
  return (
    <div class="loginfcontainer">
      <form action="#0">

        <div>
          <input type="text" id="first_name" name="first_name" required placeholder=" " />
          <label for="first_name">First Name</label>
        </div>

        <div>
          <input type="text" id="last_name" name="last_name" required placeholder=" " />
          <label for="last_name">Last Name</label>
        </div>
        <div>
          <input type="tel" id="number" name="phone" required placeholder=" " />
          <label for="tel">Phone Number</label>
          <div class="requirements">
            Must be of 10_Digits.
          </div>
        </div>
        <div>
          <input type="email" id="email" name="email" required placeholder=" " />
          <label for="email">Email Address</label>
          <div class="requirements">
            Must be a valid email address.
          </div>
        </div>

        <div>
          <input type="password" id="password" name="password" required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" />
          <label for="password">Password</label>
          <div class="requirements">
            Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.
          </div>
        </div>

        <input type="submit" value="Sign Up" />

      </form>
    </div>
  )
}

export default Login
