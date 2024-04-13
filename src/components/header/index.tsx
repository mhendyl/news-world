/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../../rtk/tab/thunk";
import { AppRootState } from "../../rtk/store";

export const HeaderNews = () => {
  const dispatch = useDispatch();
  const onClickTab = (param: string) => {
    dispatch(setActiveTab(param));
  }
  const {tab} = useSelector(
    (state: AppRootState) => state.tabReducer,
  );
  
  return (
    <header className=" text-black px-10 py-5">
      <h1 className="text-2xl font-bold ">News Forum</h1>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <a onClick={() => { onClickTab('feed') }} aria-current="page" className={`inline-block p-4 rounded-t-lg ${tab === 'feed' || tab === '' ?  'active dark:bg-gray-800 dark:text-blue-500' : ''}`}>
            Feed
          </a>
        </li>
        <li className="me-2">
          <a onClick={() => { onClickTab('settings') }} className={`inline-block p-4 rounded-t-lg ${tab === 'settings' ?  'active dark:bg-gray-800 dark:text-blue-500' : ''}`}>Settings</a>
        </li>
        <li className="me-2">
          <a onClick={() => { onClickTab('search') }} className={`inline-block p-4 rounded-t-lg ${tab === 'search' ?  'active dark:bg-gray-800 dark:text-blue-500' : ''}`}>Search Articles</a>
        </li>
      </ul>

    </header>
  )
}