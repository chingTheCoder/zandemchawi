import React from 'react'
import { db } from '../config/firebase'
import { doc , setDoc} from 'firebase/firestore';


function TipLost ({ tipId , setLoading , setError ,  tip , setTips }){


    const updateTip = async () => {
    
        try {
        
            setLoading(true)
            const docRef = doc(db, 'tips', tipId)
            await setDoc(docRef, {state : 'lost'} , { merge : true })
            let getIndex = tip.findIndex( p => p.id === tipId )
            setTips([
                 ...tip.slice(0, getIndex),
                 ...tip.slice(getIndex + 1)
            ])
            setLoading(false)
        }

        catch(e) {
            console.log(e)
            setError(true)
        }
    }

	return (
        <button onClick={updateTip}>
            Lost
        </button>
    )
}

export default TipLost;