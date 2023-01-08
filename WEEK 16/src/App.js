import "./App.css";
import Navbar from "./navbar";
import Banner from "./banner";
import Article from "./article";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>;
      </header>
      <Banner></Banner>
      <br />
      <Article></Article>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
