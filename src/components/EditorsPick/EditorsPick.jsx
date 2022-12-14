import styled from "styled-components";
import Button from "../UI/Button";
import EditorsCardContainer from "./EditorsCard";
import EditorsLink from "./EditorsLink";

const EditorsPick = () => {
  return (
    <Wrapper className="my-5">
      <h2>Editors pick for the week</h2>
      <EditorsLink />
      <EditorsCardContainer />
      <div className="see-btn mt-4">
        <Button title="See all" style={{ width: "6rem" }} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .see-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default EditorsPick;
