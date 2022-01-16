// import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Routes/Home";
import Graphs from "./Routes/Graphs";
import Chapter2 from "./Routes/Chapter2";
import DoesNotExist from "./Routes/DoesNotExist";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="chapter2" element={<Chapter2 />} />

          {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
          <Route path="*" element={<DoesNotExist />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div className='contentContainer'>
      <div className='menuContainer'>
        <div className='rightMenuBorder'>
          <h2>Topics</h2>
          {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
          <nav>
            <ul>
              <li>
                <Link className='link' to="/">Home</Link>
              </li>
              <li>
                <Link className='link' to="/graphs">Graphs</Link>
              </li>
              <li>
                <Link className='link' to="/chapter2">Chapter 2</Link>
              </li>
              {/* <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li> */}
            </ul>
          </nav>
        </div>
      </div>

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
export default Content;

