import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
     <h1>{post.Cardio}</h1>
            <h2>{post.BenchPress}</h2>
            <h2>{post.Deadlift}</h2>
            <h2>{post.Squat}</h2>
            <h2>{post.ShoulderPress}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update personalbest</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="Cardio"
            placeholder="Cardio"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="Bench Press"
            placeholder="Bench Press"
            defaultValue={post.BenchPress}
          />
          <input
            type="text"
            name="Dead Lift"
            placeholder="Dead Lift"
            defaultValue={post.Deadlift}
          />
           <input
            type="text"
            name="Squat"
            placeholder="Squat"
            defaultValue={post.Squat}
          />
           <input
            type="text"
            name="Shoulder Press"
            placeholder="Shoulder Press"
            defaultValue={post.ShoulderPress}
          />
          <button>Update personalbest</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete personalbest</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
}

export default Show;