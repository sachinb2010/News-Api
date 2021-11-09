let fromsearch=document.querySelector(".search")
let input=document.querySelector(".input")
let newslist=document.querySelector(".class-list")
errors=document.querySelector(".error")
resets=document.querySelector(".reset")
fromsearch.addEventListener("submit",retrive)
function retrive(e){
    if(input.value ==''){
       errors.style.visibility ="visible"
    //    alert("Cannot  be empty")
      
    }
    else{
        errors.style.visibility="hidden"
    }
   e.preventDefault()
    const apikey="94f42a355dac46058db498796915b083"
    let topic=input.value
    

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
    fetch(url).then((res)=>{
        return res.json()

    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article => {
            let li=document.createElement('li')
            let a= document.createElement('a')
            a.setAttribute('href',article.url)
            a.setAttribute('target','_blank')
            a.textContent = article.title;
            li.appendChild(a);
            
            newslist.appendChild(li);
            
        });
    })
   
}
