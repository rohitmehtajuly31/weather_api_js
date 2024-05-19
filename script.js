const url=`https://api.openweathermap.org/data/2.5/weather?units=metrics&q=`;
const key='747cf5ef6189c8173c47fc5fe0dc9810';

async function weather(city){
    const response=await fetch(`${url}${city}&appid=${key}`);
    var data=await response.json()
    console.log(data)
    console.log(data.main)
    const cityn=document.querySelector('.city')
    cityn.innerHTML=data.name;
}
weather('delhi')
     

