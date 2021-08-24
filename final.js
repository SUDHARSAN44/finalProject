
let data=[]
const abc=async(link)=>
{
    let api=await fetch(link)
    let res = await api.json()
  
    console.log(res)
    return res;
}

abc("http://universities.hipolabs.com/search?country=India")

.then((e) => {
    data=e
    console.log(data)
    myf();

})

.catch((err)=>{
    console.log(err.message)
   
})
function myf(){
document.querySelector("#search"),addEventListener("input",(event=>{
    let content1 =document.querySelector("#accordion")
    finalData=data.filter((university)=>university.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
    console.log(finalData)

    content1.innerHTML =''
finalData.map((university) => content1.innerHTML += `

  <div class="col-lg-2 col-md-2 col-sm-1">
<div class="card text-center" style="width: 80%;margin-top: 10px; ">
<h3> University Name :${university.name}</h3>
  <ul class="list-group list-group-flush">
   
    <li class="list-group-item">Domain : ${university.domains}</li>
    <li class="list-group-item">Country : ${university.country}</li>
    <li class="list-group-item">Website : ${university.web_pages}</li>
  </ul>
</div>
</div>
`);
}  
));
}
