// @flow
import * as React from 'react'
import Layout from '../components/layout'
import Cat from '../components/cat.svg'

const about = () => (
  <Layout title="About us">
    <h1>About us</h1>
    <div>
      <h2>Rate Adjustment</h2>
      <p>
        The Placer County Water Agency (PCWA) Board has adopted new rates and
        charges for water delivery and service. New rates will be effective
        January 1, 2018.
      </p>
      <p>Read More...</p>
      <Cat />

      <style jsx>{`
        div {
          text-alignment: center;
          max-width: 500px;
          left: 0;
          right: 0;
          margin: auto;
        }
      `}</style>
    </div>
  </Layout>
)

export default about
