import "./App.css"
import Nav from "./Nav";

function App() {

  function NumCheck(number){
    if (number <50) return <p>less than 50</p>
    if (number >50) return <p>bigger than 50</p>
  }
    const firstname = "דורון";
    const lastname = "שפריר"

    function fullName() {
        return firstname + " " + lastname;
    }
    const fn = fullName();

    function displayNums(num) {
        let elements = [];
        for (let i = 0; i < num; i++) {
            elements.push(<span key={i}>{i}</span>);
            //span - display inline - לא יורד שורה
            // div  display block יורד שורה is container 
            //<p> display block  יורד שורה 
        }
        return <div>{elements}</div>;
    }

    return (
        <div>
          <Nav />
            <h1>Details</h1>
            {/* <p>My name is {firstname}</p>
            <p>My name is {lastname}</p> */}
            {fn}
            {displayNums(100)}
            {NumCheck(30)}
        </div>
    );
}

export default App;