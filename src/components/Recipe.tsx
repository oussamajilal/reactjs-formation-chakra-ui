import { Box, Button } from "@chakra-ui/react";
import * as React from "react";
import RecipeIndicator from "./RecipeIndicator";

const initialState = { likes: 0, dislikes: 0 };

const reducer = (state: RecipeState, action: RecipeAction): RecipeState => {
  switch (action.type) {
    case "like":
      return { ...state, likes: state.likes + 1 };
    case "dislike":
      return { ...state, dislikes: state.dislikes + 1 };
    default:
      throw new Error("Unknown dispatch");
  }
};

interface RecipeProps {
  id: number;
}

const Recipe = (props: RecipeProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Box>
      <RecipeIndicator inc={state.likes - state.dislikes} />
      <span>
        My Recipe N° {props.id} liked{" "}
        <span data-testid="recipe-likes">{state.likes}</span> times and disliked{" "}
        <span data-testid="recipe-dislikes">{state.dislikes}</span> times{" "}
      </span>
      <Button
        data-testid="button-like"
        onClick={() => dispatch({ type: "like" })}
      >
        Like
      </Button>
      <Button
        data-testid="button-dislike"
        onClick={() => dispatch({ type: "dislike" })}
      >
        Dislike
      </Button>
    </Box>
  );
};

export default Recipe;
