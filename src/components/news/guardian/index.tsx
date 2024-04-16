import { useSelector } from "react-redux";
import { AppRootState } from "../../../rtk/store";
import { convertDate } from "../../../utils";
import EmptyNews from "../../emptyNews";

const GuardianNews = () => {
  const { article, isLoading } = useSelector(
    (state: AppRootState) => state.guardianReducer,
  );
  
  const dataResults = article?.response?.results;

  const renderNews = () => {
    if (dataResults && dataResults.length > 0) {
      return dataResults.map((result, index) => {
        return (
          <div className="w-full md:w-4/12 inline-grid">
            <div className="border border-black rounded-md my-4 p-5 mx-5 h-auto">
              <p className="bg-blue" key={index}>{result.webTitle}</p>
              <p>published: {convertDate(result.webPublicationDate)}</p>
              <a href={result.webUrl} target="_blank" className="text-blue-500" rel="noreferrer">{`Details >>`}</a>
            </div>
          </div>
        );
      });
    } else if (dataResults && dataResults.length === 0) {
      return (
        <EmptyNews />
      )
    }
  };
  return (
    <div className="px-10 mt-5 ">
      {isLoading ? (
        <div className="w-full">
          <p className="text-center text-lg font-bold">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {renderNews()}
        </div>
      )}
    </div>
  )
};

export default GuardianNews;