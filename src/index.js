import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import NotFound from "./pages/NotFound"
import Tasks from './pages/Tasks';
import Logout from './pages/Logout';
import Account from './pages/Account';

const rootElement = document.getElementById("root");

const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="newtask" element={<NewTask />} />
          {/* <Route path="tasks" element={<Tasks />} /> */}
          <Route path="account" element={<Account />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)