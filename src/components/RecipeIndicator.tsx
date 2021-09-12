import { Box } from "@chakra-ui/layout";
import * as React from "react";

interface RecipeIndicatorProps {
  inc: number;
}

const RecipeIndicator = (props: RecipeIndicatorProps) => {
  const [background, setBackground] = React.useState("yellow");

  React.useEffect(() => {
    if (props.inc > 5) setBackground("red");
  }, [props.inc]);

  return <Box w="10" p="10" backgroundColor={background}></Box>;
};

export default RecipeIndicator;
