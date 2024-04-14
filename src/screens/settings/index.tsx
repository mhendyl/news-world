import { useState } from "react";
import SelectOption from "../../components/selectOption";
import { dataCategory, newsApiCategory } from "../../mock/category";
import { dataSource } from "../../mock/source";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../../rtk/store";
import { setFeedOption } from "../../rtk/settingsFeed/thunk";
import { dataAuthor } from "../../mock/author";
import { newsGetAuthorThunk } from "../../rtk/news/thunk";

const SettingScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { feed } = useSelector(
    (state: AppRootState) => state.feedReducer,
  );
  console.log('>>> feed', feed);
  
  const [source, setSource] = useState(feed.source);
  const [category, setCategory] = useState(feed.category);
  const [author, setAuthor] = useState(feed.author);

  const { getAuthor } = useSelector(
    (state: AppRootState) => state.newsReducer,
  );
  const dataAuthorNewsAPI = getAuthor?.articles;
  

  const onChangeCategory = (value: string) => {
    setCategory(value);
    if (source === 'News API') {
      dispatch(newsGetAuthorThunk({category: value}))
    } else {
      
    }
  }

  const saveSettingsFeed = () => {
    const param = {
      source: source,
      category: category,
      author: author,
    }
    dispatch(setFeedOption(param))
  }

  const setCategoryData = source === 'News API' ? newsApiCategory : dataCategory;
  
  return (
    <div className='px-10 flex flex-wrap'>
      <SelectOption selected={source} className="w-3/12" label='Source' onSelect={(val) => { setSource(val); }} option={dataSource} />
      {source !== 'Guardian' && (
        <SelectOption selected={category} className="w-3/12" label='Category' onSelect={(val) => { onChangeCategory(val) }} option={setCategoryData} />
      )}
      {source === 'News API' && (
        <SelectOption selected={author} className="w-3/12" label='Author' type="newsAPIAuthor" onSelect={(val) => { setAuthor(val); }} option={dataAuthorNewsAPI} />
      )}
      {/* <SelectOption label='Author' onSelect={(val) => { setAuthor(val); }} option={dataAuthor} /> */}
      <button className="px-4 py-2 border border-black rounded-md" onClick={saveSettingsFeed}>Save</button>
    </div>
  )
}

export default SettingScreen;