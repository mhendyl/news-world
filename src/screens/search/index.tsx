import { useState } from "react";
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
import NewsApi from "../../components/news/newsApi";
import { resetGuardian } from "../../rtk/guardian";
import { resetNews } from "../../rtk/news";

const SearchScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [source, setSource] = useState('Guardian');
  const [search, setSearch] = useState<string>('');
  const [date, setDate] = useState<string | null>(convertDate(new Date()));

  const searchArticle = () => {
    dispatch(resetGuardian());
    dispatch(resetNews());
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

      default:
        break;
    }
  }
  return (
    <div>
      <div className='px-10 columns-5'>
        <Search onChange={setSearch} />
        <SelectDate label='From Date' onChangeDate={(date) => { setDate(convertDate(date)) }} />
        <SelectOption label='Source' onSelect={(val) => { setSource(val); }} option={dataSource} />
        {source !== 'Guardian' && (
          <SelectOption label='Category' onSelect={(val) => { console.log(val) }} option={dataCategory} />
        )}
        <button className="px-4 py-2 border border-black rounded-md" onClick={searchArticle}>Search</button>
      </div>
      <GuardianNews />
      <NewsApi />
    </div>
  )
}

export default SearchScreen;