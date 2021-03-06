// @flow
import gray from 'gray-percentage'
import type {OptionsType} from 'typography'
import {MOBILE_MEDIA_QUERY} from 'typography-breakpoint-constants'

const theme: OptionsType = {
  title: 'Chico',
  baseFontSize: '16px',
  baseLineHeight: 1.6875,
  scaleRatio: 2.5,
  googleFonts: [
    {
      name: 'Asap Condensed',
      styles: ['500']
    },
    {
      name: 'Asap',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['Asap Condensed', 'sans-serif'],
  bodyFontFamily: ['Asap', 'sans-serif'],
  // headerColor: 'hsla(0,0%,0%,1)',
  headerColor: gray(24),
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 500,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({adjustFontSizeTo, scale, rhythm}, options) => ({
    a: {
      color: '#d65947',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: options.bodyColor
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2)
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid #fca206`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    }
  })
}

export default theme
