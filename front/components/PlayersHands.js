import styled from "styled-components";

const PlayersHandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  justify-content: space-between;
`;
const HandContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  justify-content: space-between;
`;
const CardsContainer = styled.div`
  padding: 0 3%;
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: space-between;
`;
const Card = styled.img`
  height: 100%;
`;
const HandResolution = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;
const PartyResolution = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayersHands = ({ party }) => {
  console.log(party);
  const {
    userHandDisplay,
    userResolution,
    bankHandDisplay,
    bankResolution,
    status,
  } = party;
  return (
    <PlayersHandsContainer>
      <HandContainer>
        <CardsContainer>
          {userHandDisplay.map((card, index) => {
            return (
              <Card src={`cards/${card}.svg`} key={index} alt="poker-card" />
            );
          })}
        </CardsContainer>
        <HandResolution>{userResolution.handRank}</HandResolution>
      </HandContainer>
      <PartyResolution>{status}</PartyResolution>
      <HandContainer>
        <CardsContainer>
          {bankHandDisplay.map((card, index) => {
            return (
              <Card src={`cards/${card}.svg`} key={index} alt="poker-card" />
            );
          })}
        </CardsContainer>
        <HandResolution>{bankResolution?.handRank}</HandResolution>
      </HandContainer>
    </PlayersHandsContainer>
  );
};
export default PlayersHands;
