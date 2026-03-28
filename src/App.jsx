import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import NavBar from "./components/Navbar";

const getModels = async () => {
  const res = fetch("/models.json");
  return (await res).json();
};

const modelPromise = getModels();

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Cart"
        />
      </div>

      <Models modelPromise={modelPromise}></Models>
      <Cart></Cart>
      <Footer></Footer>
    </>
  );
}

export default App;
