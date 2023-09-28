import { Link } from "react-router-dom";

function Post ({post}){
    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.Cardio}</h1>
            <h2>{post.BenchPress}</h2>
            <h2>{post.Deadlift}</h2>
            <h2>{post.Squat}</h2>
            <h2>{post.ShoulderPress}</h2>
        </Link>
    </div>
}

export default Post;
