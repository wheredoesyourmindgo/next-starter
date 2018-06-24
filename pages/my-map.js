// @flow
import * as React from 'react'
import ReactMapGL, {NavigationControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

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
  static async getInitialProps() {
    try {
      return {windowWidth: window.innerWidth, windowHeight: window.innerHeight}
    } catch (err) {
      console.warn(err)
      return {windowWidth: 0, windowHeight: 0}
    }
  }
  componentDidMount() {
    try {
      this.setState((prevState, {windowWidth, windowHeight}) => {
        if (windowWidth > 0 || windowHeight > 0) {
          console.log("don't need to do anything.")
          return prevState
        }
        return {
          viewport: {
            ...prevState.viewport,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })
    } catch (err) {
      console.warn('Error during componentDidMount.')
    }
  }

  state = {
    viewport: {
      width: this.props.windowWidth || 500,
      height: this.props.windowHeight || 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  }

  onUpdateViewport = (viewport: Viewport) => {
    this.setState({viewport})
  }

  render() {
    // const {viewport, updateViewport} = this.props

    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={process.env._MAPBOX_ACCESS_TOKEN_}
          {...this.state.viewport}
          onViewportChange={this.onUpdateViewport}
        >
          <div style={{position: 'absolute', right: '10px', top: '10px'}}>
            <NavigationControl onViewportChange={this.onUpdateViewport} />
          </div>
        </ReactMapGL>
      </div>
    )
  }
}

export default MyMap