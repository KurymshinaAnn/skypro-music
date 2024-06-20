import renderer from "react-test-renderer";
import PlayListTitle from "./PlayListTitle";

it("Renders playlist title", () => {
  const playlistTitle = renderer.create(PlayListTitle());
  let tree = playlistTitle.toJSON();
  expect(tree).toMatchSnapshot();
});
