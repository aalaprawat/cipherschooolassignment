let bakery=[]
fetch("data.json")
.then((res)=>res.json())
.then((data)=>{
    store(data)})


var alla=(event)=>{
    search(event)

}

var search=(event)=>{
    
    if(event){
        let d=event.target.name
        if(d==="all"){
            for (let index = 0; index < bakery[0].length; index++) {
                filtered=bakery[0].filter((indi)=>
                {
                    return true
                })
            }
        }
        else{
        for (let index = 0; index < bakery[0].length; index++) {
            filtered=bakery[0].filter((indi)=>
            {
                return indi.type.includes(d)
            })
        }
        }
        console.log(filtered)
        filtera(filtered)
        return
    
    }
    else
    
    {let filtered;
    let d=document.getElementById("search").value
    for (let index = 0; index < bakery[0].length; index++) {
        filtered=bakery[0].filter((indi)=>
        {
            return indi.name.includes(d)
        })
    }
    console.log(filtered)
    filtera(filtered)

    }
}



var store =(data)=>{
    data.forEach(res => {
        let card = document.createElement("div");
        card.className='col'
        card.id='del'

        let image = document.createElement("img")
        image.src=res.image
        image.width=100
        image.className='div'
        card.appendChild(image)

        let name = document.createTextNode( res.name );
        name.className='div'
        name.className='text-left'
        card.appendChild(name);

        let description = document.createTextNode(res.price);
        description.className='text-right'
        card.appendChild(description);

        

        let container = document.querySelector("#item");
        container.appendChild(card);
       
    });
    bakery.push(data)
}

var filtera =(data)=>{
    if(document.getElementById('item'))
    document.getElementById('item').remove()

    else{
        document.getElementById('new').innerHTML=''
    }

    data.forEach(res => {

        let card = document.createElement("div");
        card.className='col'

        let image = document.createElement("img")
        image.src=res.image
        image.width=100
        image.className='div'
        card.appendChild(image)

        let name = document.createTextNode( res.name );
        name.className='div'
        name.className='text-left'
        card.appendChild(name);

        let description = document.createTextNode(res.price);
        description.className='text-right'
        card.appendChild(description);

        

        let container = document.querySelector("#new");
        container.appendChild(card);
       
    });
}



 