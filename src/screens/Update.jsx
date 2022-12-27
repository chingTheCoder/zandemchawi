import React , { useEffect, useState }from 'react';
import Loading from '../components/Loading'
import { db } from '../config/firebase'
import { collection, query,  getDocs , where } from 'firebase/firestore';
import Error from '../components/Error';
import TipWon from '../components/TipWon';
import TipLost from '../components/TipLost';
import NoTips from '../components/NoTips';

function Update (){
    
    const [ loading , setLoading ] =  useState(true)
    const [ tip , setTips ] = useState([])
    const [ error , setError ] = useState(false)

    useEffect( () => {
        fetchTips()
    }, [])


    async function fetchTips () {

        
        try {

            setLoading(true)
            let q = query(collection(db, "tips"), where("state", "==", 'progress'))
            const data = await getDocs(q)
            data.docs.map(doc => setTips( arr => [...arr, {id : doc.id , tip : doc.data()}]))
            //console.log(tip.length)
            setLoading(false)
            console.log(tip)
        }

        catch (e) {

            setError(true)

        }
    } 

    const tipWon = (x) => {
        console.log(x)
    }


    const tipLost = () => {
        console.log('tip lost')
    }

	return (
        <>
            {
                loading ? <Loading/>  : 
                <>
                    {
                        error ? <Error></Error> : 
                        <>
                            {
                                tip.length === 0 ? <NoTips/> :
                                tip.map((data) => (
                                    <div key={data.id}>
                                        <div className='card'>
                                            {/* {data.tip.createdAt} */}
                                            <span>
                                                {new Date(data.tip.createdAt.seconds * 1000 + data.tip.createdAt.nanoseconds / 1000000).toDateString()}
                                            </span>
                                            <div className='teams'>
                                                <span>{data.tip.homeTeam}</span>
                                                <span>Vs</span>
                                                <span>{data.tip.awayTeam}</span>
                                            </div>
                                            <div className='tip'>
                                                <span>{data.tip.tip}</span>
                                            </div>
                                            <div className='state'>
                                                <TipWon tipId={data.id} setError={setError} setLoading={setLoading} tip={tip} setTips={setTips}/>
                                                <TipLost tipId={data.id} setError={setError} setLoading={setLoading} tip={tip} setTips={setTips}/>                   
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </>
            }
        </>
    )
}

export default Update;
