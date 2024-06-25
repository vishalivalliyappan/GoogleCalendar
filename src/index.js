import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://xpgrbkybkvdwroumvbtg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZ3Jia3lia3Zkd3JvdW12YnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMDU0OTYsImV4cCI6MjAzNDc4MTQ5Nn0.xqjNgIGWgdvL6XWvGAiRldV4XFqwhVJ6Gy3CgAmUvO4"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);


reportWebVitals();
