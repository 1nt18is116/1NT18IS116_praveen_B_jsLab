const btn = document.getElementById('submit')

btn.addEventListener('click',()=> {
    let getData=document.getElementById('name').value;
    alert(getData);
    console.log(getData);
})