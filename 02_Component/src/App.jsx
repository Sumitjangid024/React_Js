
import StudentCard, { Studata, Student } from "./component/StudentCard";
import Header from "./component/Header"
import "./App.css"
function App(Name, Age, Course) {

  return (
    <>

      <Header />
      <div className="Container">
        <StudentCard />
        <Student />
        <Studata />
      </div>

    </>
  );
}
export default App

