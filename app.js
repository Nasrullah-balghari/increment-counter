const counters = document.querySelectorAll(".counter");
counters.forEach((counter)=>{
   counter.innerHTML = 0
const updateCounter = ()=>{
    const targetConut = +(counter.getAttribute('data-target'));
    const startingCount = Number(counter.innerHTML) ;
    const incr = targetConut/100;
    if(startingCount < targetConut){
        counter.innerHTML = `${startingCount + incr}`;
        setInterval(updateCounter, 120)
    } else{
        counter.innerHTML = targetConut;
    }
}

   updateCounter()
})