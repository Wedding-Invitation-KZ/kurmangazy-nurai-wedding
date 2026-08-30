import "./style.css";

const WEDDING_DATE = new Date("2026-10-01T18:00:00+05:00").getTime();

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbywlsdFrPZY6gu29wu9dWUzwDm_7oL4v0EI64vjn5G9tCB4_WXOz08NPaT8b39G22Ai/exec";

const heroImg = "image.png";

const ornament = `<svg class="divider-orn" viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/></svg>`;

document.querySelector("#app").innerHTML = `
  <header class="hero" id="hero">
    <img class="hero-bg" src="${heroImg}" alt="">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="hero-pre">Біздің тойымызға қош келдіңіздер</p>
      <h1 class="hero-names">Құрманғазы<span class="hero-amp">&</span>Нұрай</h1>
      <p class="hero-sub">1 қазан 2026 · Кентау</p>
    </div>
    <div class="hero-scroll">
      Төмен
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </div>
  </header>

  <section id="invite" class="reveal">
    <p class="section-label">Екі жүрек — бір тағдыр</p>
    <div class="divider">${ornament}</div>
    <p class="invite-lead">Құрметті қонақтар! <br> Сіздерді балаларымыз <br> <span class="couple-names">Құрманғазы мен Нұрайдың</span> <br> үйлену тойына арналған салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!</p>
    <div class="invite-hosts-decoration">
      <span>✦</span>
      <span>❦</span>
      <span>✦</span>
    </div>
    <p class="invite-hosts">Той иелері <br> Талғат — Жазира</p>
    <div class="invite-hosts-decoration bottom">
      <span>✦</span>
      <span>❦</span>
      <span>✦</span>
    </div>
  </section>

  <section id="date" class="reveal">
    <p class="section-label">Той салтанаты</p>
    <div class="date-card">
      <div class="date-day">01</div>
      <div class="date-month">Қазан</div>
      <div class="date-year">2026 жыл</div>
      <div class="date-time">Сағат 18:00-де Беташар <br> Сағат 19:00-де Той</div>
    </div>
  </section>

  <section id="countdown" class="reveal">
    <p class="section-label">Той салтанатына дейін</p>
    <div class="countdown" id="countdown">
      <div class="cd-unit"><div class="cd-num" id="cd-d">00</div><div class="cd-label">Күн</div></div>
      <div class="cd-unit"><div class="cd-num" id="cd-h">00</div><div class="cd-label">Сағат</div></div>
      <div class="cd-unit"><div class="cd-num" id="cd-m">00</div><div class="cd-label">Минут</div></div>
      <div class="cd-unit"><div class="cd-num" id="cd-s">00</div><div class="cd-label">Секунд</div></div>
    </div>
  </section>

  <section id="venue" class="reveal">
    <p class="section-label">Мекен-жайымыз</p>
    <h2 class="section-title">«Ай-гүл» тойханасы</h2>
    <p class="venue-addr">Кентау қаласы</p>
    <p class="invite-body" style="margin-bottom:1.8rem">Сізге ыңғайлы болу үшін төмендегі батырманы басып, картаны аша аласыз.</p>
    <a href="https://go.2gis.com/6TMnO" target="_blank" rel="noopener" class="map-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      Картаны ашу
    </a>
  </section>

  <section id="rsvp" class="reveal">
    <p class="section-label">Сауалнама</p>
    <h2 class="section-title">Тойға қатысуыңызды растауыңызды сұраймыз</h2>
    <form class="rsvp-form" id="rsvp-form">
      <div class="field">
        <label for="r-name">Аты-жөніңіз</label>
        <input id="r-name" name="name" type="text" placeholder="Толық аты-жөніңіз" required />
      </div>
      <div class="field">
        <label>Қатысасыз ба?</label>
        <div class="choice">
          <button type="button" class="choice-btn" data-attending="yes">Иә, барамын</button>
          <button type="button" class="choice-btn" data-attending="no">Өкінішке орай, бара алмаймын</button>
        </div>
      </div>
      <div class="field">
        <label for="r-count">Қонақтар саны</label>
        <input id="r-count" name="guests" type="number" min="1" max="10" value="1" />
      </div>
      <div class="field">
        <label for="r-msg">Құттықтауыңыз (міндетті емес)</label>
        <textarea id="r-msg" name="message" placeholder="Жүрегіңізден шыққан жылы лебізді білдіріңіз..."></textarea>
      </div>
      <button class="submit-btn" type="submit" id="r-submit">Жіберу</button>
      <p class="form-note" id="r-note"></p>
    </form>
  </section>

  <footer class="footer">
    <div class="divider">${ornament}</div>
    <p class="footer-names">Құрманғазы & Нұрай</p>
    <p class="footer-thanks">Қадірлі қонағымыз болыңыздар!</p>
  </footer>

  <button class="music-btn" id="music-btn" aria-label="Музыка қосу">
    <svg class="music-icon-play" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M8 5v14l11-7z"/>
    </svg>
    <svg class="music-icon-pause" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" style="display:none">
      <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
    </svg>
  </button>
  <audio id="audio-player" autoplay loop preload="auto">
    <source src="music.mp3" type="audio/mpeg" />
  </audio>

  <div class="success-modal" id="success-modal">
    <div class="success-modal-overlay"></div>
    <div class="success-modal-content">
      <button class="success-modal-close" id="success-modal-close">&times;</button>
      <div class="success-modal-icon">✓</div>
      <h3 id="success-modal-title">Рақмет!</h3>
      <p id="success-modal-message">Сізді тойда көруге асығамыз.</p>
    </div>
  </div>
`;

/* ---------- Countdown ---------- */
function pad(n) {
  return String(n).padStart(2, "0");
}
function tickCountdown() {
  const now = Date.now();
  let diff = WEDDING_DATE - now;
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pad(v);
  };
  set("cd-d", d);
  set("cd-h", h);
  set("cd-m", m);
  set("cd-s", s);
}
tickCountdown();
setInterval(tickCountdown, 1000);

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Music player ---------- */
const musicBtn=document.getElementById("music-btn");
const audio=document.getElementById("audio-player");
const playIcon=musicBtn.querySelector(".music-icon-play");
const pauseIcon=musicBtn.querySelector(".music-icon-pause");
let isPlaying=false;
function updateMusicButton(playing){
  isPlaying=playing;
  musicBtn.classList.toggle("playing",playing);
  playIcon.style.display=playing?"none":"";
  pauseIcon.style.display=playing?"":"none";
}
function playMusic(){
  audio.play()
    .then(()=>updateMusicButton(true))
    .catch(()=>updateMusicButton(false));
}
musicBtn.addEventListener("click",()=>{
  if(audio.paused){
    playMusic();
  }else{
    audio.pause();
    updateMusicButton(false);
  }
});
document.addEventListener("click",()=>{
  if(audio.paused){
    playMusic();
  }
},{once:true});

/* ---------- RSVP form ---------- */
let attending=null;
const note=document.getElementById("r-note");
const submitBtn=document.getElementById("r-submit");
const guestsField=document.getElementById("r-count").closest(".field");
const guestsInput=document.getElementById("r-count");
const successModal=document.getElementById("success-modal");
const successModalClose=document.getElementById("success-modal-close");
const successModalMessage=document.getElementById("success-modal-message");
guestsField.style.display="none";

function resetRSVP(){
  document.getElementById("rsvp-form").reset();
  document.querySelectorAll(".choice-btn").forEach(b=>b.classList.remove("active"));
  attending=true;
  guestsField.style.display="none";
  guestsInput.value=1;
  note.textContent="";
  note.classList.remove("error");
}

function showSuccessModal(){
  successModal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeSuccessModal(){
  successModal.classList.remove("show");
  document.body.classList.remove("modal-open");
  resetRSVP();
}

document.querySelectorAll(".choice-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".choice-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    attending=btn.dataset.attending==="yes";

    if(attending){
      guestsField.style.display="";
      guestsInput.value=1;
    }else{
      guestsField.style.display="none";
      guestsInput.value=0;
    }
  });
});

document.getElementById("rsvp-form").addEventListener("submit",async e=>{
  e.preventDefault();

  const name=document.getElementById("r-name").value.trim();
  const guests=attending?(parseInt(guestsInput.value,10)||1):0;
  const message=document.getElementById("r-msg").value.trim();

  if(!name){
    note.textContent="Аты-жөніңізді жазыңыз.";
    note.classList.add("error");
    return;
  }

  if(attending===null){
    note.textContent="Қатысуыңызды таңдаңыз.";
    note.classList.add("error");
    return;
  }

  submitBtn.disabled=true;
  submitBtn.textContent="Жіберілуде...";
  note.textContent="";
  note.classList.remove("error");

  const payload=JSON.stringify({
    name,
    attending,
    guests_count:guests,
    message:message||"",
    submitted_at:new Date().toISOString()
  });

  try{
    await fetch(GOOGLE_SHEET_URL,{
      method:"POST",
      mode:"no-cors",
      headers:{
        "Content-Type":"text/plain;charset=utf-8"
      },
      body:payload
    });

    successModalMessage.textContent=attending
      ?"Рақмет! Сізді тойда көруге асығамыз."
      :"Рақмет! Жауабыңыз қабылданды.";

    showSuccessModal();

  }catch(err){
    note.textContent="Қате орын алды. Қайталап көріңіз.";
    note.classList.add("error");
  }finally{
    submitBtn.disabled=false;
    submitBtn.textContent="Жіберу";
  }
});

successModalClose.addEventListener("click",closeSuccessModal);
