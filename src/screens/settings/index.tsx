import SelectOption from "../../components/selectOption";
import { dataCategory } from "../../mock/category";
import { dataSource } from "../../mock/source";

const SettingScreen = () => {
  return (
    <div className='px-10 columns-5'>
      <SelectOption label='Source' onSelect={(val) => { console.log(val); }} option={dataCategory} />
      <SelectOption label='Category' onSelect={(val) => { console.log(val); }} option={dataSource} />
      <SelectOption label='Author' onSelect={(val) => { console.log(val); }} option={dataSource} />
    </div>
  )
}

export default SettingScreen;