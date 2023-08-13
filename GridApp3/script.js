async function getPockemonData()
{
    let response=await fetch("pokedex.json")
    let data=await response.json()
    return data.slice(0,100 )
}
function drawPokemon(data)
{
    return data.map(pockemon =>{
        return `
      
            <div class="my-pockemon">
                <div class="my-pokemon-id">${pockemon.id}</div>
                <div class="my-pokemon-name">${pockemon.name.english}</div>
                <div class="my-pokemon-type">${pockemon.type.join('/')}</div>
                <div class="my-pokemon-stat">HP:${pockemon.base.HP}</div>
                <div class="my-pokemon-stat">Attack:${pockemon.base.Attack}</div>
                <div class="my-pokemon-stat">Defense:${pockemon.base.Defense}</div>
                <div class="my-pokemon-stat">Speed:${pockemon.base.Speed}</div>
                <div class="my-pokemon-alt-name">${pockemon.name.japanese}</div>
                <div class="my-pokemon-alt-name">${pockemon.name.chinese}</div>
                <div class="my-pokemon-alt-name">${pockemon.name.french}</div>

            </div>
      
         `
    }).join('')
}
getPockemonData().then(data=>{
    console.log(data);
    document.body.innerHTML=` <div class="pokemon-container">${drawPokemon(data)} </div>`
})