'use client';
import { useRouter } from 'next/navigation';
import './signup.css';

function signup() {
  const router = useRouter();
  return (
    <div class="container">
      <form action="#">
        <h2>Sign Up</h2>
        <div class="input-group">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required></input>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required></input>
        </div>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required></input>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>
        </div>
        <button type="submit" onClick={() => router.push('/login/SignIn')}>
          Sign Up
        </button>
        <p>
          Already have an account? <a href="/login/SignIn">Sign In</a>
        </p>
      </form>
    </div>
  );
}

export default signup;
