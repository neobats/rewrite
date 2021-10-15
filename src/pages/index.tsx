import { Base } from "components/layout/Base"
import { Typography } from "components/system/Typography"
import * as React from 'react'
import { Box } from "../components/system/Box"

const IndexPage = () => {
  return (
    <Base>
      <Box width="100%">
        <Typography tag="h1">Hello World</Typography>
      </Box>
    </Base>
  )
}

export default IndexPage
