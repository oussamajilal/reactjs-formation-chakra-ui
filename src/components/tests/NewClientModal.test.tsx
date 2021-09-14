import * as React from "react";
import { render } from "../../test-utils";
import NewClientModal from "../NewClientModal";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/dom";

let onClose: jest.Mock;
let handleSubmit: jest.Mock;

beforeEach(() => {
  onClose = jest.fn();
  handleSubmit = jest.fn();
});

describe("NewClientModal", async () => {
  it("should render correctly", async () => {
    render(
      <NewClientModal
        isOpen={true}
        onClose={onClose}
        handleSubmit={handleSubmit}
      />
    );

    const idElement = screen.getByTestId("new-client-id");
    userEvent.type(idElement, "4");
    const firstNameElement = screen.getByTestId("new-client-first-name");
    userEvent.type(firstNameElement, "fake first name");
    const lastNameElement = screen.getByTestId("new-client-last-name");
    userEvent.type(lastNameElement, "fake last name");
    const emailElement = screen.getByTestId("new-client-email");
    userEvent.type(emailElement, "fake@email.com");
    const phoneNumberElement = screen.getByTestId(
      "new-client-phone-number"
    );
    userEvent.type(phoneNumberElement, "666778899");
    const heightElement = screen.getByTestId("new-client-height");
    userEvent.type(heightElement, "61.3");
    const isActiveElement = screen.getByTestId("new-client-is-active");
    userEvent.click(isActiveElement);

    const formSubmit = screen.getByTestId("newclient-form-submit");
    userEvent.click(formSubmit);

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "john.dee@someemail.com",
        firstName: "John",
        lastName: "Dee",
      })
    );
  });
});
