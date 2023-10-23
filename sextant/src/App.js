import Exhibit from './components/Exhibit';
import SiteBanner from './components/SiteBanner';
import PublicIPAddress from './components/PublicIPAddress';
import './App.css';

function App() {
  return (
    <div>
    <SiteBanner/>
    <Exhibit title="Sample Exhibit">
      <PublicIPAddress ipv4={true}/>
      <PublicIPAddress ipv4={false}/>
    </Exhibit>
    {/* You can add more exhibits or other content here */}
  </div>
  );
}

export default App;
