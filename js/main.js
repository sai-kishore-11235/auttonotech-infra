// Header solid on scroll
  const hdr=document.getElementById('hdr');
  const onScroll=()=>{hdr.classList.toggle('solid',window.scrollY>30)};
  window.addEventListener('scroll',onScroll);onScroll();

  // Mobile menu
  const mm=document.getElementById('mobileMenu');
  document.getElementById('burger').addEventListener('click',()=>mm.classList.add('open'));
  document.getElementById('mclose').addEventListener('click',()=>mm.classList.remove('open'));
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mm.classList.remove('open')));

  // Reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Counters
  const counted=new Set();
  const cio=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting && !counted.has(e.target)){
        counted.add(e.target);
        const el=e.target,target=+el.dataset.count;let cur=0;
        const step=Math.max(1,Math.ceil(target/30));
        const t=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(t);}el.textContent=cur;},34);
      }
    });
  },{threshold:.5});
  document.querySelectorAll('.num[data-count]').forEach(el=>cio.observe(el));

  // Form feedback
  document.getElementById('submitBtn').addEventListener('click',()=>{
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const note=document.getElementById('formNote');
    if(!name||!email){note.textContent='Please add your name and email to submit.';note.style.color='#54c2ec';return;}
    note.textContent='Thank you, '+name.split(' ')[0]+'. The Infrastructure Division team will be in touch.';
    note.style.color='#54c2ec';
    document.getElementById('enquiry').reset();
  });

  // Hero structural truss animation
  const canvas=document.getElementById('truss');
  const ctx=canvas.getContext('2d');
  let W,H,t=0;
  function resize(){W=canvas.width=canvas.offsetWidth*devicePixelRatio;H=canvas.height=canvas.offsetHeight*devicePixelRatio;}
  resize();window.addEventListener('resize',resize);
  function draw(){
    ctx.clearRect(0,0,W,H);
    const cols=14, baseY=H*0.86, topY=H*0.40;
    const span=W/cols;
    ctx.lineWidth=1*devicePixelRatio;
    // truss bottom + top chords + diagonals
    ctx.strokeStyle='rgba(39,170,225,0.36)';
    ctx.beginPath();
    for(let i=0;i<=cols;i++){
      const x=i*span;
      const wob=Math.sin((i*0.6)+t*0.012)*10*devicePixelRatio;
      // top chord
      if(i===0)ctx.moveTo(x,topY+wob);else ctx.lineTo(x,topY+wob);
    }
    ctx.stroke();
    ctx.beginPath();
    for(let i=0;i<=cols;i++){const x=i*span;if(i===0)ctx.moveTo(x,baseY);else ctx.lineTo(x,baseY);}
    ctx.stroke();
    // verticals + diagonals
    ctx.strokeStyle='rgba(255,255,255,0.10)';
    for(let i=0;i<=cols;i++){
      const x=i*span;const wob=Math.sin((i*0.6)+t*0.012)*10*devicePixelRatio;
      ctx.beginPath();ctx.moveTo(x,topY+wob);ctx.lineTo(x,baseY);ctx.stroke();
      if(i<cols){
        const x2=(i+1)*span;const wob2=Math.sin(((i+1)*0.6)+t*0.012)*10*devicePixelRatio;
        ctx.beginPath();
        if(i%2===0){ctx.moveTo(x,baseY);ctx.lineTo(x2,topY+wob2);}
        else{ctx.moveTo(x,topY+wob);ctx.lineTo(x2,baseY);}
        ctx.stroke();
      }
      // node dots
      ctx.fillStyle='rgba(39,170,225,0.62)';
      ctx.beginPath();ctx.arc(x,topY+wob,2*devicePixelRatio,0,7);ctx.fill();
    }
    t++;requestAnimationFrame(draw);
  }
  draw();
