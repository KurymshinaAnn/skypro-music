import renderer from "react-test-renderer";
import NavLink from "./NavLink";

it("Renders NavLink with different names", () => {
  const navlink = renderer.create(
    <NavLink href="https://google.com">test</NavLink>
  );
  let tree = navlink.toJSON();
  expect(tree).toMatchSnapshot();
});
