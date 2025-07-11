const userInfo = document.getElementById("userInfo"); 
const errorDiv = document.getElementById("errorDiv"); 

const imgDiv = document.getElementById("img-div"); 
const idDiv = document.getElementById("id-div"); 
const nameDiv = document.getElementById("name-div");
const ageDiv = document.getElementById("age-div");
const genderDiv = document.getElementById("gender-div");
const emailDiv = document.getElementById("email-div");
const phoneDiv = document.getElementById("phone-div");
const birthDiv = document.getElementById("birth-div");
const addDiv = document.getElementById("add-div");
const expDiv = document.getElementById("exp-div");

function getUser() {
    const input = document.getElementById("userId");
    const userId = input.value;
    fetch(`https://dummyjson.com/users/${userId}`)
        .then((res)=> res.json())
        .then((data)=>{
              userInfo.classList.remove("hidden");
              errorDiv.classList.add("hidden");
                input.value="";
                
                const img = document.createElement("img");

                img.src = data.image;
                img.alt = "User Image";
                img.classList= "img-size";// optional: set image size
                imgDiv.innerHTML = ""; // clear previous image
                imgDiv.appendChild(img);

                idDiv.innerHTML= data.id;
                nameDiv.innerHTML= `${data.firstName} ${data.lastName}`
                ageDiv.innerHTML= data.age;
                genderDiv.innerHTML= data.gender;
                emailDiv.innerHTML = data.email;
                phoneDiv.innerHTML = data.phone;
                birthDiv.innerHTML = data.birthDate;
                addDiv.innerHTML = `${data.address.address}, ${data.address.city}, ${data.address.country} - ${data.address.postalCode}`
                expDiv.innerHTML = `${data.company.title} at ${data.company.name}`;   
            
        })
        .catch((error)=>{
            userInfo.classList.add("hidden");
              errorDiv.classList.remove("hidden");
        })
}    




