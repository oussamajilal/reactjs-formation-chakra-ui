import { Box, Button } from "@chakra-ui/react";
import * as React from "react";
import RecipeIndicator from "./RecipeIndicator";

interface RecipeProps {
  id: number;
}

const Recipe = (props: RecipeProps) => {
  const [inc, setInc] = React.useState(0);
  const handleIncClick = () => {
    setInc(inc + 1);
  };

  return (
    <Box>
      <RecipeIndicator inc={inc} />
      <span>
        My Recipe N° {props.id} incremented
        <span data-testid="recipe-inc">{inc}</span> times
      </span>
      <Button data-testid="button-inc" onClick={handleIncClick}>
        +
      </Button>
    </Box>
  );
};

export default Recipe;
