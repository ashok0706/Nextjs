'use client';
import { useRouter } from 'next/navigation';
import './signin.css';

const signin = () => {
  const router = useRouter();

  return (
    <div class="container">
      <form action="#">
        <h2>Sign In</h2>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required></input>
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>
        </div>
        <button type="submit" onClick={() => router.push('/login/success')}>
          Sign In
        </button>
        <p>
          Don't have an account? <a href="/login/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default signin;
