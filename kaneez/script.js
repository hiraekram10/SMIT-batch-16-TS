import supabase from "./config.js";

console.log(supabase);

let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let submitt = document.getElementById("submitt");

async function signup(e) {
    e.preventDefault();
    console.log(email.value, password.value);

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });
        if (data) {
            console.log(data);

        }
    } catch (error) {
        console.log(error);
    }
}

submitt.addEventListener("submit", signup);
