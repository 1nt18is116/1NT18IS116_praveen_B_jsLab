let getButton=document.getElementById('fetch');

const fetchData = () =>{
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then( fun => {
        let result=fun.activity;
        console.log(fun)
        document.getElementById("as3").innerHTML=result
    })
    .then(jsonres => console.log(jsonres))
    .catch(e=>console.log(e))
}

getButton.addEventListener('click',fetchData);