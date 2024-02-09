function page() {
  return (
    <div class="container">
      <h2>Login Successful!</h2>
      <p>Welcome back, [Username]!</p>
      <p>You are now logged in.</p>
      <a href="/" class="btn">
        Go to Dashboard
      </a>
      <p>{/* Not [Username]? <a href="logout.html">Logout</a> */}</p>
    </div>
  );
}

export default page;
