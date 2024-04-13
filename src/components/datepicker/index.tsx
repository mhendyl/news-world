
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type SelectDateType = {
  label: string;
  onChangeDate: (date: any) => void;
}
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SelectDate = ({
  label,
  onChangeDate
}: SelectDateType) => {
  return (
    <div className="w-[33.3%]">
      <p>{label}</p>
      <DatePicker className="border border-black px-1 rounded-md" selected={new Date()} onChange={(date) => onChangeDate(date)} />
    </div>
  );
};

export default SelectDate;