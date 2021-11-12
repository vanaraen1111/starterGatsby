import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Need IT expertise for your business needs? Let's Talk</p>
    <StaticImage
      src="../images/van-whatsapp.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Let's Talk :)"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Buy me a coffee if you want :)</p>
    <StaticImage
      src="../images/van-qrpay-maybank.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Cia me :P"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
