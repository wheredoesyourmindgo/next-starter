// @flow
import * as React from 'react'
import Layout from '../components/layout'
import withRoot from '../src/withRoot'
import Typography from '@material-ui/core/Typography'

const index = () => (
  <Layout>
    <Typography variant="display1" gutterBottom>
      My Mui-Mapp
    </Typography>
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

export default withRoot(index)
