import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Muhammad Osama</title>
      </Helmet>
      <div>
        <h1 className="heading">Hello World</h1>
      </div>
    </Layout>
  )
}
