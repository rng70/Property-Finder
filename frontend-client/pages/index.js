import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      
      <Head>
        <title>Property Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-between items-center px-8 py-3 fixed z-1 w-full top-0 opacity-90 bg-zinc-700 text-white">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> DevConnector</a>
      </h1>
      <ul className="flex">
        <li><a href="profiles.html">Developers</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
      </nav>
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Property Finder
        </h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        
      </footer>
    </div>
  )
}

export default Home
