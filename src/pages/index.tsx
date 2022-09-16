import * as React from "react";
import { Base } from "../components/layout/Base";
import { Box } from "../components/system/Box";
import { Typography } from "../components/system/Typography";

const IndexPage = () => {
  return (
    <Base>
      <Box width="100%">
        <Typography tag="h1">Hello World</Typography>
      </Box>
    </Base>
  );
};

export default IndexPage;
