import React , { useRef , useState }  from 'react';
import { db } from '../config/firebase.js'
import { addDoc, collection } from "firebase/firestore"
import Loading from '../components/Loading'
import Error from '../components/Error';

function Home (){


    const [ loading , setLoading ] = useState(false)
    const [error , showError ] = useState(false)

    const league = useRef()
    const homeTeam = useRef()
    const awayTeam = useRef()
    const tip = useRef()

    const handleSubmit = async (event) => {

        event.preventDefault()
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, "tips"), {
                createdAt : new Date(),
                leagueName : league.current.value,
                homeTeam : homeTeam.current.value,
                awayTeam : awayTeam.current.value,
                tip : tip.current.value,
                state : 'progress'
              })
    
            console.log("Document written with ID: ", docRef.id)
            setLoading(false)
        }
        catch (e) {
            console.log("Error adding document: ", e)
            setLoading(false)
            showError(true)
       }
      
    }
	return (

        <>
             {
                loading ? <Loading></Loading> : 

                <>
                    {
                        error ? <Error></Error> : 

                        <>
                            <h1 style={{ color : 'whitesmoke'}}>Create Tip</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input type='text' placeholder='League' ref={league}/>
                                </div>
                                <div>
                                    <input type='text' placeholder='HomeTeam' ref={homeTeam}/>
                                </div>
                                <div>
                                    <input type='text' placeholder='AwayTeam' ref={awayTeam}/>
                                </div>
                                <div>
                                    <input type='text' placeholder='Tip' ref={tip}/>
                                </div>
                                <button type='submit'>Create Tip</button>
                            </form>
                        </>
                    }
                </>
                
             }
        </>

    )
}

export default Home;
