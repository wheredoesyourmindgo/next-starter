// @flow

import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: React.Node,
  title?: string
}

const layout = ({children, title = 'This is the default title'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a className="link">Home</a>
        </Link>|
        <Link href="/about">
          <a>About</a>
        </Link>|
        <Link href="/contact">
          <a>Contact</a>
        </Link>|
        <Link href="/my-map">
          <a>Map</a>
        </Link>
      </nav>
      <style jsx>{`
        a {
          padding: 10px;
        }
      `}</style>
    </header>
    {children}
    <footer>I`m a foot.</footer>
  </div>
)

export default layout
