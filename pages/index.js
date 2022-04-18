import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/landing.scss'
import Head from 'next/head'
// import Custom Components

const Home = () => {
  
  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })

  return (
    <Fragment>
      <div className="landing-page">
      <Head>
        <title>Vasooja</title>
      </Head>

      </div>
    </Fragment>
  )
}

export default Home
