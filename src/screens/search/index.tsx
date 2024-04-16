import { useEffect, useState } from "react";
import SelectDate from "../../components/datepicker";
import Search from "../../components/search";
import SelectOption from "../../components/selectOption";
import { dataCategory } from "../../mock/category";
import { dataSource } from "../../mock/source";
import { useDispatch } from "react-redux";
import { convertDate } from "../../utils";
import { guardianThunk } from "../../rtk/guardian/thunk";
import { AppDispatch } from "../../rtk/store";
import GuardianNews from "../../components/news/guardian";
import { newsThunk } from "../../rtk/news/thunk";
import NewsCard from "../../components/news/newsApi";
import { resetGuardian } from "../../rtk/guardian";
import { resetNews } from "../../rtk/news";
import { newYorkThunk } from "../../rtk/newyork/thunk";
import NewYorkNews from "../../components/news/newYork";
import { resetNewYork } from "../../rtk/newyork";

const SearchScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [source, setSource] = useState('Guardian');
  const [search, setSearch] = useState<string>('');
  const [date, setDate] = useState<string | null>(convertDate(new Date()));

  useEffect(() => {
    dispatch(resetGuardian());
    dispatch(resetNews());
    dispatch(resetNewYork());
  }, [])
  
  const searchArticle = () => {
    dispatch(resetGuardian());
    dispatch(resetNews());
    dispatch(resetNewYork());
    const params = {
      query: search,
      date: date,
    }
    switch (source) {
      case 'Guardian':
        dispatch(guardianThunk(params))
        break;
      case 'News API':
        dispatch(newsThunk(params))
        break;
      case 'New York News':
        dispatch(newYorkThunk(params))
        break;
    }
  }
  return (
    <div>
      <div className='px-10 flex flex-wrap'>
        <div className="w-full md:w-2/12 px-3">
          <Search className="my-auto w-full" onChange={setSearch} />
        </div>
        <SelectDate className="m-auto" label='From Date' onChangeDate={(date) => { setDate(convertDate(date)) }} />
        <SelectOption className="w-full md:w-2/12 px-3" label='Source' onSelect={(val) => { setSource(val); }} option={dataSource} />
        {source !== 'Guardian' && (
          <SelectOption className="w-full md:w-2/12 px-3" label='Category' onSelect={(val) => { console.log(val) }} option={dataCategory} />
        )}
        <div className="w-full md:w-2/12 m-auto mt-2 md:mb-0 md:mt-0">
          <button className="px-4 border border-black flex m-auto rounded-md py-3" onClick={searchArticle}>Search</button>
        </div>
      </div>
      <GuardianNews />
      <NewsCard />
      <NewYorkNews />
    </div>
  )
}

export default SearchScreen;