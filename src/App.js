import Nav from "./components/Nav.jsx";
import Featured from "./components/Featured.jsx";
import Popular from "./components/Popular.jsx";
import Hardware from "./components/Hardware.jsx";
import ExplorePlus from "./components/ExplorePlus";
import MonthlyFeatured from "./components/MonthlyFeatured";
import Latest from "./components/Latest";
import NewReleases from "./components/NewReleases";
import PreviousHardware from "./components/PreviousHardware";
import Store from "./components/Store"
import Clothing from "./components/Clothing"
import Socials from "./components/Socials"
import Footer from "./components/Footer"
function App() {
  function showHardware() {
    // onclicking hardware-items-container we want to display hardware-container
  }
  return (
    <div className="App">
      <Nav />
      <Featured />
      <Popular />
      <Hardware click={showHardware} />
      <ExplorePlus />
      <MonthlyFeatured />
      <Latest />
      <NewReleases />
      <PreviousHardware />
      <Store />
      <Clothing />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
