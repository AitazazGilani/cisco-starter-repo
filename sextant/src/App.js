import Exhibit from './components/Exhibit';
import SiteBanner from './components/SiteBanner';
import PublicIPAddress from './components/PublicIPAddress';
import PacketLatency from './components/PacketLatency';
import './App.css';

function App() {
  return (
    <div>
    <SiteBanner/>
    <Exhibit title="IP Addresses">
      <PublicIPAddress ipv4={true}/>
      <PublicIPAddress ipv4={false}/>
      <PacketLatency/>
    </Exhibit>
    
    {/* You can add more exhibits or other content here */}
  </div>
  );
}

export default App;
