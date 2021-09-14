import * as React from "react";
import { render } from "../../test-utils";
import ClientList from "../ClientList";

describe("ClientList", () => {
  it("should render correctly", () => {
    const componentDom = render(<ClientList />);
    expect(componentDom.asFragment()).toMatchSnapshot();
  });
});
