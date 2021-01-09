import {useEffect, useState} from "react";

export default function Display_api_dofus({monster}) {
    let [Monster, setMonster] = useState([]);

    useEffect(() => {
        let lastCalled = true;
        const fetchData = () => {
            fetch(`https://fr.touch.dofapi.fr/monsters?filter[where][name]=${monster}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setMonster(data));

        };
        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [monster]);

    return (
        <>
            {Monster.map(({_id, name, imgUrl}) => (
                <div key={_id}>
                    <div>
                        <h2>{name}</h2>
                    </div>
                    <div><img src={imgUrl}/></div>
                </div>

            ))}
        </>

    );
}
