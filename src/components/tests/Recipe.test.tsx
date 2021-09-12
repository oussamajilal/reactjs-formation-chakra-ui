import React from "react"
import { cleanup } from '@testing-library/react'
import { render } from "../../test-utils"
import Recipe from "../Recipe"

afterEach(cleanup)

describe('Recipe', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Recipe id={1} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('should increment the counter when clicking the button', () => {
        const { getByTestId } = render(<Recipe id={1} />)
        const recipeInc = getByTestId('recipe-inc')
        const buttonInc = getByTestId('button-inc')
        expect(recipeInc).toHaveTextContent('0')
        buttonInc.click()
        expect(recipeInc).toHaveTextContent('1')
        buttonInc.click()
        expect(recipeInc).toHaveTextContent('2')
        buttonInc.click()
        expect(recipeInc).toHaveTextContent('3')
    })
})