
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type SelectDateType = {
  label: string;
  onChangeDate: (date: any) => void;
  className?: string;
}
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SelectDate = ({
  label,
  onChangeDate,
  className,
}: SelectDateType) => {
  return (
    <div className={`w-3/12 ${className}`}>
      <p>{label}</p>
      <DatePicker className="border border-black px-1 rounded-md w-full" selected={new Date()} onChange={(date) => onChangeDate(date)} />
    </div>
  );
};

export default SelectDate;