import renderer from "react-test-renderer";
import ProgressBar from "./ProgressBar";

it("Renders progress bar", () => {
  const mockCallback = jest.fn();
  const progressBar = renderer.create(
    ProgressBar({
      value: 0,
      max: 100,
      step: 5,
      onChange: mockCallback,
    })
  );
  let tree = progressBar.toJSON();
  expect(tree).toMatchSnapshot();
});
