import "./App.css";

function App(){
    const user=[
        {FirstName:"Younes"},
        {LastName:"Hadi"},
        {Age:18},
        {City:"Tehran"},
        {university:null},
       {school:"Mandegar Alborz"}
    ];
    return(
        <div className="mainContainer">
            <h1>Hello guys!</h1>
            <br/>
            {user?.university? `Your university is ${user[4].university}` : `Your school is ${user[5].school}`}
            {user.map(data =>
            <h4>{Object.values(data)?.[0]}</h4>
            )}
        </div>
    )
}

export default App;