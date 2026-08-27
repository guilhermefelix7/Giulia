const $=id=>document.getElementById(id);
$("open").onclick=()=>{document.body.classList.add("magic-mode");document.querySelector(".intro").scrollIntoView({behavior:"smooth"});setTimeout(()=>document.body.classList.remove("magic-mode"),700)};
$("magic").onclick=()=>{document.body.classList.toggle("magic-mode");$("magic").textContent=document.body.classList.contains("magic-mode")?"✨":"🔮"};
$("secretBtn").onclick=()=>{
  const s=$("secret");s.classList.add("show");s.scrollIntoView({behavior:"smooth"});
  for(let i=0;i<20;i++){
    const x=document.createElement("span");x.textContent=["💜","✨","⭐","🌙"][Math.floor(Math.random()*4)];
    x.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:100vh;font-size:${14+Math.random()*18}px;z-index:99;transition:transform 2.4s ease,opacity 2.4s ease`;
    document.body.appendChild(x);requestAnimationFrame(()=>{x.style.transform=`translateY(-${55+Math.random()*80}vh) rotate(${Math.random()*180}deg)`;x.style.opacity=0});
    setTimeout(()=>x.remove(),2500);
  }
};