import * as React from "react"

interface RecipeProps {
    id: number;
}

const Recipe = (props: RecipeProps) => <span>My Recipe N° {props.id}</span>

export default Recipe;