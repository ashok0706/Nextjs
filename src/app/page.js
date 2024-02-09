'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <title>Welcome Page</title>

      <body>
        <div class="container">
          <h1>Welcome to Thinklabs LLC</h1>
          <p>Please sign in or sign up to continue.</p>
          <div>
            <a href="/login/SignIn" class="btn">
              Sign In
            </a>

            <a href="/login/signup" class="btn">
              {/* <Link href="/login/signup" class="btn"> */}
              Sign Up
              {/* </Link> */}
            </a>
            <Link href="/form" class="btn">
              Formik form
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}
