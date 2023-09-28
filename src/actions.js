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
            "content-Type": "application/json"
        },
        body: JSON.stringify(newPersonalBest)
    })
    return redirect("/")
}