import Display_api_dofus from "./DisplayApi1";
import Display_git from "./Display_git";

//Fonction permettant de récupérer le monstre adéquat
function GetTheGoodMonster(repos) {
    if (repos <= 5)
        return <Display_api_dofus monster={"Tronknyde"}/>
    else if (repos <= 10)
        return <Display_api_dofus monster={"Branche Invocatrice"}/>
    else if (repos <= 15)
        return <Display_api_dofus monster={"Branche Soignante"}/>
    else if (repos <= 20)
        return <Display_api_dofus monster={"Arbre Collant"}/>
    else if (repos<= 25)
        return <Display_api_dofus monster={"Abraknyde"}/>
    else if (repos <= 30)
        return <Display_api_dofus monster={"Abraknyde Sombre"}/>
    else if (repos <= 35)
        return <Display_api_dofus monster={"Abraknyde Ancestral"}/>
    else if (repos > 35)
        return <Display_api_dofus monster={"Chêne Mou"}/>
}


export default function DisplayMFG({git_pseudo, pseudos, setPseudos}) {

    if (git_pseudo === ""){
        return (<></>);
    }

    if (!pseudos.id){
        return(<>
            <Display_git user_git={git_pseudo} pseudos={pseudos} setPseudos={setPseudos}/>
        </>);
    }

    return (
        <>
           <Display_git user_git={git_pseudo} pseudos={pseudos} setPseudos={setPseudos}/>
            <h1>
                <span className="pseudo_git"> {git_pseudo} </span>
                est un(e)
                {GetTheGoodMonster(pseudos.public_repos)}
           </h1>
        </>
    );

}