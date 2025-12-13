import supabase from "../config.js";

console.log(supabase);

let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let submitt = document.getElementById("submitt");

async function login(e) {
  e.preventDefault();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (data) {
      console.log(data);
    }
  } catch (error) {
    console.log(console.error);
  }
}

submitt.addEventListener("submit", login);
