import { useEffect, useState } from "react";
import SelectOption from "../../components/selectOption";
import { dataCategory, newsApiCategory } from "../../mock/category";
import { dataSource } from "../../mock/source";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../../rtk/store";
import { setFeedOption } from "../../rtk/settingsFeed/thunk";
import { newsGetAuthorThunk } from "../../rtk/news/thunk";

const SettingScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { feed } = useSelector(
    (state: AppRootState) => state.feedReducer,
  );

  const { getAuthor } = useSelector(
    (state: AppRootState) => state.newsReducer,
  );

  const [source, setSource] = useState('Guardian');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [categoryData, setCategoryData] = useState(dataCategory)
  const dataAuthorNewsAPI = getAuthor?.articles;

  useEffect(() => {
    if (source !== 'Guardian') {
      const dataSetCategory = source === 'News API' ? newsApiCategory : dataCategory;
      setCategoryData(dataSetCategory);
      onChangeCategory(categoryData[0].value)
    }
  }, [categoryData, source])

  useEffect(() => {
    if (dataAuthorNewsAPI && dataAuthorNewsAPI.length > 0) setAuthor(dataAuthorNewsAPI[0].author)
  }, [dataAuthorNewsAPI])



  useEffect(() => {
    if (feed.author || feed.category || feed.source) {
      setSource(feed.source);
      setCategory(feed.category);
      setAuthor(feed.author);
    }
  }, [feed.author, feed.category, feed.source])





  const onChangeCategory = async (value: string) => {
    setCategory(value);
    if (source === 'News API') {
      dispatch(newsGetAuthorThunk({ category: value }))
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

  return (
    <div className='px-10 flex flex-wrap'>
      <SelectOption selected={source} className="w-full md:w-3/12" label='Source' onSelect={(val) => { setSource(val); }} option={dataSource} />
      {source !== 'Guardian' && (
        <SelectOption selected={category} className="w-full md:w-3/12" label='Category' onSelect={(val) => { onChangeCategory(val) }} option={categoryData} />
      )}
      {source === 'News API' && (
        <SelectOption selected={author} className="w-full md:w-3/12" label='Author' type="newsAPIAuthor" onSelect={(val) => { setAuthor(val); }} option={dataAuthorNewsAPI} />
      )}
      {/* <SelectOption label='Author' onSelect={(val) => { setAuthor(val); }} option={dataAuthor} /> */}
      <div className="w-full md:w-2/12 m-auto mt-2 md:mb-0 md:mt-0">
        <button className="px-4 border border-black flex m-auto rounded-md py-3" onClick={saveSettingsFeed}>Save</button>
      </div>

    </div>
  )
}

export default SettingScreen;