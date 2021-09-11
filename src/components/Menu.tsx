import * as React from "react"
import { Heading, ListItem, UnorderedList } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import Recipe from "./Recipe";

const Menu = () => <Box>
    <Heading>My Menu</Heading>
    <UnorderedList>
        <ListItem>
            <Recipe id={1} />
        </ListItem>
        <ListItem>
            <Recipe id={2} />
        </ListItem>
        <ListItem>
            <Recipe id={3} />
        </ListItem>
    </UnorderedList>
</Box>

export default Menu;