import React from "react"
import { cleanup } from '@testing-library/react'
import { render } from "../../test-utils"
import Menu from "../Menu"

afterEach(cleanup)

describe('Menu', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Menu />)
        expect(asFragment()).toMatchSnapshot()
    })
})