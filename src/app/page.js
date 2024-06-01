// import NAVandFOOTER from "../components/NAVandFOOTER/NAVandFOOTER";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import MainSG from "@/components/MainSG/MainSG";
// import AboutSG from "../components/AboutSG/AboutSG";

export default function Home() {
  return (
    <main>
      <Nav />
      <SideBar />
        <MainSG />
      <Footer />
        {/* <NAVandFOOTER /> */}
        {/* <HomeSG /> */}
        {/* <AboutSG /> */}
    </main>
  );
}
