import { render } from "@testing-library/react";

import Search from "../components/elements/Search";

it("checkSearchRender", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("search");
  expect(input).toBeTruthy();
});
