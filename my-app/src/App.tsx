import styled from "styled-components";
import tw from "twin.macro";
import HomePageContainer from "./app/containers/HomePage";

const AppContainer = styled.div`
 ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`


function App() {
  return (
    <AppContainer>
      <HomePageContainer />
    </AppContainer>
  );
}

export default App;
