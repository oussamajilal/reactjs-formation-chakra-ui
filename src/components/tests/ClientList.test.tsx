import { fireEvent } from "@testing-library/dom";
import * as React from "react";
import { render } from "../../test-utils";
import ClientList from "../ClientList";

describe("ClientList", () => {
  it("should render correctly", () => {
    const componentDom = render(<ClientList />);
    expect(componentDom.asFragment()).toMatchSnapshot();
  });

  it("should render modal when modal-btn is clicked", () => {
    const componentDom = render(<ClientList />);
    const modalBtn = componentDom.getByTestId("modal-btn");
    modalBtn.click();
    const form = componentDom.getByTestId("new-client-form");
    expect(form).toBeInTheDocument();
    const firstNameInput = componentDom.getByTestId("new-client-first-name");
    fireEvent.change(firstNameInput, {target: {value: 'fake first name'}})
    const lastNameInput = componentDom.getByTestId("new-client-last-name");
    fireEvent.change(lastNameInput, {target: {value: 'fake last name'}})

    // TODO: fill the entire form
    
    const formSubmit = componentDom.getByTestId("newclient-form-submit");
    formSubmit.click();
    //expect()
  });
});
