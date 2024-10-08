import Emoji from "../emoji/Emoji";
import LikeButton from "../buttons/LikeButton";
import BackToProfileButton from "../buttons/BackToProfileButton";
import SinglePostId from "../SinglePost/SinglePostsId";
import { StyledSinglePostCard, StyledButtonCard } from "./StyledCard.styles";


function SinglePostCard() {

    return (  
        <>
          <StyledSinglePostCard>
              <div>
                <h3>Single Post</h3>
              </div> 
              <div>
                <SinglePostId />
              </div>
              <div>
                <Emoji />
                <StyledButtonCard>
                  <LikeButton />
                  <BackToProfileButton />
                </StyledButtonCard>   
              </div>
          </StyledSinglePostCard>
        </>
    );
}

export default SinglePostCard;