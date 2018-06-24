// @flow
import * as React from 'react'
import Layout from '../components/layout'

const index = () => (
  <Layout>
    <h1>My Mapp</h1>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

export default index
