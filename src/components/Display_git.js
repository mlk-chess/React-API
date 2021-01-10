import {useEffect, useState} from "react";

export default function Display_git({user_git, pseudos, setPseudos}) {

    //Variables d'états pour récupérer le status de l'API
    let [status, setStatus] = useState(0);
    let [statusText, setStatusText] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchData = () => {
            fetch(`https://api.github.com/users/${user_git}`)
                .then((response) => {
                    setStatus(response.status)
                    setStatusText(response.statusText)
                    return response.json()
                })
                .then((data) => lastCalled && setPseudos(data))
        };
        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [user_git]);

    // Vérifie qu'on ne sollicite pas trop l'API
    if (status === 403) {
        return (
            <div className="error">
                {statusText}
            </div>
        );
    }
    //Vérifie si on a bien rentré un pseudo git dans l'input
    if (user_git === "") {
        return (<></>);
    }

    //Vérifie que le pseudo git existe
    if (!pseudos.id && status === 404) {
        return (
            <div className="error">
                <p>Utilisateur github non-existant</p>
            </div>
        );
    }

    return (
        <>
            <h1 key={pseudos.name}>
                {pseudos.name}
            </h1>
            <div className="img_github">
                <img src={pseudos.avatar_url}/>
            </div>
            <div>
                <h2>Nombre de repos: {pseudos.public_repos}</h2>
            </div>
        </>
    );
}


