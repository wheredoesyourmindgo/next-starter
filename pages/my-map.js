// @flow
import * as React from 'react'
import ReactMapGL, {NavigationControl} from 'react-map-gl'
import Layout from '../components/layout'
import 'mapbox-gl/dist/mapbox-gl.css'
import {debounce} from 'lodash'

// Layout Header and Footer are 27px in height.
const SUBTRACT_FROM_HEIGHT = 54

type Props = {
  windowWidth: number,
  windowHeight: number
}

type Viewport = {
  width: number,
  height: number,
  latitude: number,
  longitude: number,
  zoom: number
}

type State = {
  viewport: Viewport
}

class MyMap extends React.Component<Props, State> {
  /**
   * window may not be available in getInitialProps. try/catch block used to prevent runtime error.
   */
  static async getInitialProps() {
    try {
      return {windowWidth: window.innerWidth, windowHeight: window.innerHeight}
    } catch (err) {
      return {windowWidth: 0, windowHeight: 0}
    }
  }

  /**
   * Set viewport width and height to window width and height if and only if they are not already set
   * via getInitialProps. This is useful for a static/ssr rendered page load.
   */
  componentDidMount() {
    try {
      this.setState((prevState, {windowWidth, windowHeight}) => {
        if (windowWidth > 0 || windowHeight > 0) {
          return prevState
        }
        return {
          viewport: {
            ...prevState.viewport,
            width: window.innerWidth,
            height: window.innerHeight - SUBTRACT_FROM_HEIGHT
          }
        }
      })
    } catch (err) {
      console.warn('Error during componentDidMount.')
    }

    /**
     * Resize map during window resize event.
     */
    window.addEventListener(
      'resize',
      debounce(() => {
        this.setState((prevState) => {
          return {
            viewport: {
              ...prevState.viewport,
              width: window.innerWidth,
              height: window.innerHeight - SUBTRACT_FROM_HEIGHT
            }
          }
        })
      }),
      200
    )
  }

  state = {
    viewport: {
      width: this.props.windowWidth || 1000,
      height: this.props.windowHeight - SUBTRACT_FROM_HEIGHT || 1000,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  }

  onUpdateViewport = (viewport: Viewport) => {
    this.setState({viewport})
  }

  onClickHandler = (event: any) => {
    // console.log(event)
  }

  render() {
    // const {viewport, updateViewport} = this.props

    return (
      <div>
        <Layout title="Map">
          <ReactMapGL
            mapboxApiAccessToken={process.env._MAPBOX_ACCESS_TOKEN_}
            {...this.state.viewport}
            onViewportChange={this.onUpdateViewport}
            onClick={this.onClickHandler}
          >
            <div style={{position: 'absolute', right: '10px', top: '10px'}}>
              <NavigationControl onViewportChange={this.onUpdateViewport} />
            </div>
          </ReactMapGL>
        </Layout>
      </div>
    )
  }
}

export default MyMap
