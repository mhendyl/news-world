import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../../rtk/store";
import { useEffect } from "react";
import { guardianNoDateThunk } from "../../rtk/guardian/thunk";
import { newsGetFeedThunk } from "../../rtk/news/thunk";
import NewsCard from "../../components/news/newsApi";
import GuardianNews from "../../components/news/guardian";
import NewYorkNews from "../../components/news/newYork";
import { newYorkFeedThunk } from "../../rtk/newyork/thunk";
import { resetGuardian } from "../../rtk/guardian";
import { resetNews } from "../../rtk/news";
import { resetNewYork } from "../../rtk/newyork";

const NewsFeed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { feed } = useSelector(
    (state: AppRootState) => state.feedReducer,
  );

  useEffect(() => {
    dispatch(resetGuardian());
    dispatch(resetNews());
    dispatch(resetNewYork());
    switch (feed.source) {
      case 'Guardian':
        dispatch(guardianNoDateThunk())
        break;
      case 'News API':
        const param = {
          category: feed.category,
          author: feed.author,
        }
        dispatch(newsGetFeedThunk(param))
        break;
      case 'New York News' :
        const category = {
          category: feed.category,
        }
        dispatch(newYorkFeedThunk(category))
    }
  }, [])
  
  
  return (
    <div className="px-10">
      <p>Please set your preference in settings</p>
      <NewsCard />
      <GuardianNews />
      <NewYorkNews />
    </div>
  )
}

export default NewsFeed;