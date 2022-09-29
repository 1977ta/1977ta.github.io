{
  let humTop = document.querySelector('#humTop');
  let btn = document.querySelector('.hum-btn');
  let humItem = document.querySelector('#humItem');

  btn.onclick = () =>{
    humTop.classList.toggle('open');
  }
  humItem.onclick = () =>{
    humTop.classList.toggle('open');
  }
}

{
  function play(){
    setTimeout(()=>{
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex>images.length-1){
        currentIndex=0;
      }
      images[currentIndex].classList.add('current');
      play();
    },4000);
  }
  const images=document.querySelectorAll('.hero img');
  let currentIndex=0;
  play();
}

{
  function callback(entries,obs){
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  const options={
    threshold:0.4,
  };
  const observer=new IntersectionObserver(callback,options);
  const targets=document.querySelectorAll('.animate');
  targets.forEach(target=>{
    observer.observe(target);
  });
}

// {
//   const open=document.getElementById('infoOpen');
//   const close=document.getElementById('infoClose');
//   const modal=document.getElementById('modal');
//   const mask=document.getElementById('mask');

//   open.addEventListener('click',()=>{
//     modal.classList.remove('hidden');
//     mask.classList.remove('hidden');
//   })
//   close.addEventListener('(click',()=>{
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   })
//   mask.addEventListener('click',()=>{
//     close.click();
//   })
// }


{
  const open =document.getElementById('open');
  const close =document.getElementById('close');
  const modal =document.getElementById('modal');
  const mask =document.getElementById('mask');
 
  open.addEventListener('click',()=>{
   modal.classList.remove('hidden');
   mask.classList.remove('hidden');
  })
  close.addEventListener('click',()=>{
   modal.classList.add('hidden');
   mask.classList.add('hidden');
  })
  mask.addEventListener('click',()=>{
   close.click();
  })
 }


