import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Map from "../components/map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ height: "400px" }}>
      <Map />
    </div>
  </Layout>
)

export default IndexPage
