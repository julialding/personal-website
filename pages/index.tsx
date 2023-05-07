import Head from 'next/head'
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julia Ding</title>
        <meta name="description" content="I’m a software engineer and incoming C.P. Davis Scholar at Columbia University." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
