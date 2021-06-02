import React, { useState, useContext } from 'react';
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const PageC = () => {
    const [country, setCountry] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string>('');
    const db = firebase.firestore();
    const doc = firebase.firestore();
    const handleCreate = async () => {
        await
            db.collection('cities').doc('LA').collection('osaka').add({
                country: "japan",
                name: "Osaka-hu aosaka-shi",
                state: "JA",
            })
                .then((docref) => {
                    console.log("Document successfully written!:", docref.id);
                    setId(docref.id)
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                })
    }

    return (
        <div>
            <button onClick={handleCreate}
            >osaka
            </button>
            {id}
        </div>
    )
}
export default PageC
