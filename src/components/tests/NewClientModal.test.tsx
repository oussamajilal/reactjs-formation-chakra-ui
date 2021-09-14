import * as React from "react";
import { render } from "../../test-utils";
import NewClientModal from "../NewClientModal";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

let onClose: jest.Mock;
let handleSubmit: jest.Mock;

beforeEach(() => {
  onClose = jest.fn();
  handleSubmit = jest.fn();
});

describe("NewClientModal", () => {
  it("should render correctly", async () => {
    const componentDom = render(
      <NewClientModal
        isOpen={true}
        onClose={onClose}
        handleSubmit={handleSubmit}
      />
    );

    const idElement = componentDom.getByTestId("new-client-id");
    userEvent.type(idElement, "4");
    const firstNameElement = componentDom.getByTestId("new-client-first-name");
    userEvent.type(firstNameElement, "fake first name");
    const lastNameElement = componentDom.getByTestId("new-client-last-name");
    userEvent.type(lastNameElement, "fake last name");
    const emailElement = componentDom.getByTestId("new-client-email");
    userEvent.type(emailElement, "fake@email.com");
    const phoneNumberElement = componentDom.getByTestId(
      "new-client-phone-number"
    );
    userEvent.type(phoneNumberElement, "666778899");
    const heightElement = componentDom.getByTestId("new-client-height");
    userEvent.type(heightElement, "61.3");
    const isActiveElement = componentDom.getByTestId("new-client-is-active");
    userEvent.click(isActiveElement);

    const formSubmit = componentDom.getByTestId("newclient-form-submit");
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
