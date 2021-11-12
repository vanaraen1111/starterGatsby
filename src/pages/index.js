import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
<center>
  <Layout>
    <Seo title="Van's Landing Page" />
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
  </Layout></center>
)

export default IndexPage
