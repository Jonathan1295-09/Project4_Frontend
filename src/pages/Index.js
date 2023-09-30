import Post from '../components/Post';
import { useLoaderData, Form} from 'react-router-dom';



function Index (props){
    const personalbests = useLoaderData()
    return<>
    <div className='index'>
        <h2>Welcome To Personal best</h2>
            <Form method="Post" action="/create" className='form'>
                <input type='text' name='Cardio' placeholder='Cardio'/>
                <input type='text' name='Benchpress' placeholder='Bench Press'/>
                <input type='text' name='Deadlift' placeholder='Deadlift'/>
                <input type='text' name='Squat' placeholder='Squat'/>
                <input type='text' name='Shoulderpress' placeholder='Shoulder Press'/>
                <button>Create New personal best</button>
            </Form>
    </div>
    {personalbests.map((personalbest) => <Post key={personalbest.id} post={personalbest}/>)}
    </>
}

export default Index;