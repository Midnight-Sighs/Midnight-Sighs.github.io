import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import MainText from './Components/MainText';
import Art from './Components/Art';
import ErrorPage from './Pages/ErrorPage';
import { Development } from './Pages/Development/Development';
import About from './Components/About';
import Streaming from './Pages/Streaming';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<MainText />} />
                    <Route path="/streaming" element={<Streaming />} />
                    <Route path="/art" element={<Art />} />
                    <Route path="/development" element={<Development />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './App';
// import ErrorPage from './Pages/ErrorPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
