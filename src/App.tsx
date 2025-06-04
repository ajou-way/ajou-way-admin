import { BrowserRouter, Routes, Route } from 'react-router';

import Main from '@/pages/Main';
import BuildingList from '@/pages/BuildingList/BuildingList';
import BuildingDetail from '@/pages/BuildingDetail/BuildingDetail';
import Record from '@/pages/Record/Record';
import Marker from '@/pages/Marker/Marker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/record" element={<Record />} />
        <Route path="/building" element={<BuildingList />} />
        <Route path="/building/:id" element={<BuildingDetail />} />
        <Route path="/marker" element={<Marker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
