function Home() {
  const test = import.meta.env.VITE_TEST_VARIABLE;

  return (
    <>
      <h1>Home Page</h1>
      <h3>{test}</h3>
    </>
  )
}

export default Home;