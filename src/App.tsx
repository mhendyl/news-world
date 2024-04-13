import './App.css';
import { HeaderNews } from './components/header';
import { useSelector } from 'react-redux';
import { AppRootState } from './rtk/store';
import SearchScreen from './screens/search';
import SettingScreen from './screens/settings';

function App() {
  const { tab } = useSelector(
    (state: AppRootState) => state.tabReducer,
  );

  const renderActiveScreen = () => {
    switch (tab) {
      case 'feed':
        return <p>Set your preference</p>
      case 'search':
        return  <SearchScreen />
      case 'settings':
        return <SettingScreen />
    }
  }

  return (
    <div className="App">
      <HeaderNews />
      {renderActiveScreen()}
    </div>
  );
}

export default App;
