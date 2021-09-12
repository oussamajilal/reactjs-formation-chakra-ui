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
})