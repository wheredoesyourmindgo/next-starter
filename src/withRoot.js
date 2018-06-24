// @flow
import * as React from 'react'
import {MuiThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import getPageContext from './getPageContext'

// pageContext is not required. So don't let PropTypes+Flow produce any errors at runtime.
type Props = {
  pageContext?: {}
}

function withRoot(Component: any) {
  class WithRoot extends React.Component<Props> {
    pageContext: any = null

    constructor(props: Props) {
      super(props)

      this.pageContext = this.props.pageContext || getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  WithRoot.getInitialProps = (ctx) => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx)
    }

    return {}
  }

  return WithRoot
}

export default withRoot
