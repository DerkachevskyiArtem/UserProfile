import { Outlet } from 'react-router';
import Footer from '../Footer';
import s from './Layout.module.scss';
import Header from '../Header';

function Layout() {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
