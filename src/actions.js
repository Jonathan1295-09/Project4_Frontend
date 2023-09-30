import url from "./url";
import { redirect } from "react-router-dom";

export const createAction = async({request}) => {
    const formData = await request.formData();
    const newPersonalBest = {
        Cardio: formData.get("Cardio"),
        Benchpress: formData.get("Benchpress"),
        Deadlift: formData.get("Deadlift"),
        Squat: formData.get("Squat"),
        Shoulderpress: formData.get("Shoulderpress")
    }
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPersonalBest)
    })
    return redirect("/")
}

export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedPersonalBest ={
        Cardio: formData.get("Cardio"),
        Benchpress: formData.get("Benchpress"),
        Deadlift: formData.get("Deadlift"),
        Squat: formData.get("Squat"),
        Shoulderpress: formData.get("Shoulderpress")
    }

    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "applications/json"
        },
        body:JSON.stringify(updatedPersonalBest)
    })
    return redirect(`/post/${id}`)
}

export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })
    
    return redirect("/")
}