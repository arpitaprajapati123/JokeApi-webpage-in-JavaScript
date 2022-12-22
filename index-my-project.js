const jokes=document.querySelector('#jokes');
const jokesBtn=document.querySelector('#jokesBtn');

const generateJokes=()=>{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
        
    }

fetch('https://icanhazdadjoke.com', setHeader)
.then((res)=>res.json())
.then((data)=>{
    jokes.innerHTML=data.joke;
}).catch((error)=>{
    console.log(error);
})
}
jokesBtn.addEventListener('click', generateJokes);
generateJokes();