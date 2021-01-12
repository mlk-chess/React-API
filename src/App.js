import './App.css';
import Route from './components/Route';
import Display_api_dofus from "./components/DisplayApi1";
import Header_content from "./components/Header";
import { useState } from 'react';
import Display_git from "./components/Display_git";
import DisplayMFG from "./components/DisplayMonsterFromGit";

function App() {

    let [user, setUser] = useState("");
    let [pseudos, setPseudos] = useState([]);

    //Get user
    const submit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        setUser(username);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Header_content/>
            </header>

            <Route path={"/test"}>
                <h1>Test</h1>
            </Route>
            {/*Présentation de la première API: DOFUS*/}
            <Route path="/Pres1">
                <h1> Monstres Choisis </h1>
                <Display_api_dofus monster={'Tronknyde'}/>
                <Display_api_dofus monster={'Branche Invocatrice'}/>
                <Display_api_dofus monster={'Branche Soignante'}/>
                <Display_api_dofus monster={'Arbre Collant'}/>
                <Display_api_dofus monster={"Abraknyde"}/>
                <Display_api_dofus monster={"Abraknyde Sombre"}/>
                <Display_api_dofus monster={"Abraknyde Ancestral"}/>
                <Display_api_dofus monster={"Chêne Mou"}/>

            </Route>

            {/*Présentation de la deuxième API: GitHub*/}
            <Route path="/Pres2">
                <form onSubmit={submit}>
                    <input type="text" className="input" name="username" placeholder="Github username"/>
                    <input className="btn-submit submit" type="submit" value="Valider"/>
                </form>
                <Display_git user_git={user} pseudos={pseudos} setPseudos={setPseudos} />
            </Route>

            {/*Fusion des 2 APIs*/}

            <Route path="/Fusion">
                <form onSubmit={submit}>
                    <input type="text" className="input" name="username" placeholder="Github username"/>
                    <input className="btn-submit submit" type="submit" value="Valider"/>
                </form>
                <DisplayMFG git_pseudo={user} pseudos={pseudos} setPseudos={setPseudos}/>
            </Route>
        </div>
    );
}

export default App;
