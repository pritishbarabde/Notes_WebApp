import { Navbar } from "../../components/NavBar/Navbar";
import { Note } from "../../components/Note/Note";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-box">
        <Sidebar name="Home" />
        <Note />
      </div>
    </div>
  );
};
