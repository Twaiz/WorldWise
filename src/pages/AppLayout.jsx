import styles from "./AppLayout.module.css";

import SideBar from "../components/SideBar";
import Map from "../components/Map";
// import User from "../components/User"; --- нужно когда будем работать с login

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      {/* <User /> --- нужно когда будем работать с login */}
    </div>
  );
}

export default AppLayout;
