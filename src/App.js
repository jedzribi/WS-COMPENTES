import './App.css';
import Address from './compasante/Address';
import FullName from './compasante/FullName';
import ProfilePhoto from './compasante/ProfilePhoto';

function App() {
  return (
    <div style={{textalign: "center"}}>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
