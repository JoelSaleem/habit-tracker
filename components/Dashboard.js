import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import FlatCard from "./layoutComponents/FlatCard";
import { OpenRoutes } from "../pages/opens";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.iconColor};
`;

const iconStyle = { height: "70%", width: "70%", cursor: "pointer" };

export default ({ setDisplay }) => {
  return (
    <Grid>
      <FlatCard>
        <IconWrapper>
          <AddIcon
            style={iconStyle}
            onClick={() => setDisplay(OpenRoutes.CREATE)}
          />
        </IconWrapper>
      </FlatCard>
      <p>Recent</p>
      <p style={{ gridColumnEnd: 2 }}>Pie Chart> Bar Graph?</p>
    </Grid>
  );
};
