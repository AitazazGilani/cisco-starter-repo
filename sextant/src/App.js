import Exhibit from './components/Exhibit';
import SiteBanner from './components/SiteBanner';
import './App.css';

function App() {
  return (
    <div>
    <SiteBanner/>
    <Exhibit title="Sample Exhibit">
      {/* Add child components here */}
      <p>This is some content inside the exhibit.</p>
    </Exhibit>
    {/* You can add more exhibits or other content here */}
  </div>
  );
}

export default App;
