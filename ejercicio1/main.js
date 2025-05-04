let select = document.querySelector('#character-list');


fetch("https://thronesapi.com/api/v2/Characters")
.then((res) => res.json())
.then((res) => {
    console.log(res);
    
    for(let personaje of res){
        const option = document.createElement('option');
        let name = personaje["fullName"];
        option.innerText = name;
        select.appendChild(option);
    }
    let value = document.querySelector('#character-list').value;
    let img = document.querySelector('.character-image');
    img.src = res[0]["imageUrl"];

    select.addEventListener('click', ()=>{
        value = document.querySelector('#character-list').value;
        for(let p of res){
            if(p["fullName"] == value){
                img.src = p["imageUrl"];
            }
        }
    })
        
})
.catch((error) => console.log(error));
