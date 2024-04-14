import { useSelector } from "react-redux";
import { AppRootState } from "../../rtk/store";

const NewsFeed = () => {
  const { feed } = useSelector(
    (state: AppRootState) => state.feedReducer,
  );
  console.log('>>> feed', feed);
  
  return (
    <p>Set your preference</p>
  )
}

export default NewsFeed;