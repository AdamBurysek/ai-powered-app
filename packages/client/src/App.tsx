import { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState('');

   const fetchData = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();

      setMessage(data.message);
   };

   return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
         {message && <h1 className="text-3xl font-bold">{message}</h1>}

         <Button onClick={fetchData}>Fetch Data</Button>
      </div>
   );
}

export default App;
