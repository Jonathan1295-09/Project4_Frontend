import Post from '../components/Post';
import { useLoaderData } from 'react-router-dom';

function Index (props){
    const personalbests = useLoaderData()
    return<>
    <div style={{textAlign: "center"}}>
        <h2>Create a personalbest</h2>
            <Form method="Post" action="/create">
                <input type='text' name='subject' placeholder='Cardio'/>
                <input type='text' name='subject' placeholder='Bench Press'/>
                <input type='text' name='subject' placeholder='Deadlift'/>
                <input type='text' name='subject' placeholder='Squat'/>
                <input type='text' name='subject' placeholder='Shoulder Press'/>
            </Form>
    </div>
    {personalbests.map((personalbest) => <Post key={personalbest.id} post={personalbest}/>)}
    </>
}

export default Index;