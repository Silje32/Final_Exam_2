import ViewAllProfilesButton from "../buttons/ViewAllProfilesButton";
import PostList from "../posts/PostList";
import ProfilesFilter from "../Searchbar/ProfilesFilter";
import { StyledHomeCard, StyledFlex } from "./StyledCard.styles";


function HomeCard() {

    return (  
       <>
         <StyledHomeCard>
          <StyledFlex>
           <ViewAllProfilesButton />
              <ProfilesFilter />
              <PostList />        
          </StyledFlex>   
         </StyledHomeCard>
       </>
    );
}

export default HomeCard;