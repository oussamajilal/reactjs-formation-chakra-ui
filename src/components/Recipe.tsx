import { Box, Button } from "@chakra-ui/react";
import * as React from "react"

interface RecipeProps {
    id: number;
}

const Recipe = (props: RecipeProps) => {
    const [inc, setInc] = React.useState(0);
    const handleIncClick = () => {
        setInc(inc + 1);
    };

    return <Box>
        <span>My Recipe N° {props.id} incremented {inc} times</span>
        <Button onClick={handleIncClick}>+</Button>
    </Box>
}

export default Recipe;