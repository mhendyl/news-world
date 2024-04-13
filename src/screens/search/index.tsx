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

const SearchScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [source, setSource] = useState('All');
  const [search, setSearch] = useState<string>('');
  const [date, setDate] = useState<string | null>(convertDate(new Date()));
  // console.log('>>> source', source);

  // const onChangeSearch = (value: string): void => {
  //   console.log('>>> aluew', value);
  // };

  const searchArticle = () => {
    switch (source) {
      case 'Guardian':
        const params = {
          query: search,
          date: date,
        }
        dispatch(guardianThunk(params))
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
    </div>
  )
}

export default SearchScreen;