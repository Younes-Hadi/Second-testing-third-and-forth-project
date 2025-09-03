import "./App.css";

function App(){
    const user={
        FirstName:"Younes",
        LastName:"Hadi",
        Age:18,
        City:"Tehran",
        university:null,
        school:"Mandegar Alborz"
    };
    return(
        <div className="mainContainer">
            <h1>Hello guys!</h1>
            <br/>
            {user.university? `Your university is ${user.university}` : `Your school is ${user.school}`}
        </div>
    )
}

export default App;