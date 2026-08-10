/* Humility Enterprises
   Rule the whole build obeys: the joke's target is the brand, never the visitor. */

/* ---------------------------------------------------------------- catalog */
const PRODUCTS = [
  { mark:"Fig. 1", name:"The Inward Watch", price:"$2,850",
    copy:"Swiss automatic, sapphire crystal, dial mounted facing the wrist. Only the wearer can read it; when asked the time, the wearer is expected to say they don’t know. Complimentary engraving is applied to the caseback, against the skin, where it cannot be photographed." },
  { mark:"Fig. 2", name:"The Understudy", price:"$4,000 / month",
    copy:"We identify the person best qualified to hold your position, place them on retainer, and instruct them not to begin. They are paid monthly regardless. Cancel anytime; they will never be told they were standing by, and neither will you be told what they were doing instead." },
  { mark:"Fig. 3", name:"The Nonspeaking Engagement", price:"$18,000",
    copy:"We fly you to a leading conference in your discipline, business class, and arrange for you not to appear on the program. Includes hotel, green room access, and a badge reading ATTENDEE. A moderator has been briefed not to recognize you from the stage." },
  { mark:"Fig. 4", name:"The Apology Retainer", price:"$2,000 / month",
    copy:"Outside counsel on standing retainer, engaged for the sole purpose of advising you to admit fault. Available nights and weekends. The retainer is nonrefundable, a policy counsel will advise you to accept responsibility for." },
  { mark:"Fig. 5", name:"The Napkin", price:"$1,200",
    copy:"A cocktail napkin, framed in white oak, bearing the original sketch of your company’s founding idea — rendered in the handwriting of the person who actually had it. We source the handwriting from correspondence you retained. Frame includes a small light." },
  { mark:"Fig. 6", name:"Monogram Removal", price:"$600 / garment",
    copy:"Our atelier removes initials from shirting, luggage, linens, and signet rings by hand. The recovered thread is returned to you in a labeled glass vial. The label is blank." },
  { mark:"Fig. 7", name:"The Legacy Bench", price:"$12,000",
    copy:"Teak and cast iron, installed in a municipal park, with a brass plaque bearing the name of a stranger selected at random from public records. The park is chosen for its distance from your home. Maintenance is billed to you annually in perpetuity." },
  { mark:"Fig. 8", name:"The Unlabeled Hoodie", price:"$400",
    copy:"Heavyweight loopback cotton, milled in Wakayama. The logo is applied to the interior facing, at the nape. Only you know it is there. That is the product. That is also, in our experience, the problem." },
  { mark:"Fig. 9", name:"The Anonymous Donor Plaque", price:"$3,400",
    copy:"Solid brass, eighteen inches, sand-cast and hand-polished. Reads ANONYMOUS. Mounting hardware included. Our shop will not engrave a second line, and has declined every request to date." },
  { mark:"Fig. 10", name:"The Recusal Gavel", price:"$390",
    copy:"Lignum vitae, brass band, leather strike block. One strike ends your participation in the meeting. There is no second strike, and the gavel is not returned to the room after use." },
  { mark:"Fig. 11", name:"The Board", price:"$180",
    copy:"End-grain walnut cutting board, laser-engraved with your family surname, misspelled. Spelling is determined by our shop and is not disclosed in advance. We do not correct, replace, or discuss it." },
  { mark:"Fig. 12", name:"“Ask Them”", price:"$95 / 500",
    copy:"Letterpress business cards, 600gsm cotton, deckled edge. The face reads ASK THEM. The reverse is blank. Your name does not appear on the card, the box, or the order." },
  { mark:"Fig. 13", name:"The Bio", price:"$1,500",
    copy:"Our editors shorten your professional biography until it is accurate. Delivered as a single line. The engagement includes one round of revisions, which are used to make it shorter." },
  { mark:"Fig. 14", name:"The Ego Tare Scale", price:"$740",
    copy:"Brushed steel platform, glass readout, calibrated annually. Weighs you, then subtracts what you believed you weighed. The display shows the remainder. In eleven months of testing the remainder has never been zero." },
  { mark:"Fig. 15", name:"The Humility Retreat", price:"$6,500 / seven days",
    copy:"An intensive at our facility in the high desert. Participants prepare and serve all meals. Facilitators eat, rest, and lead the evening reflection on service. Sessions are not recorded, and there is no certificate; participants who request one are placed on next year’s kitchen rotation." },
  { mark:"Fig. 16", name:"The Mirror", price:"$2,100",
    copy:"Hand-silvered, beveled, 24 × 36 inches, in a plain ash surround. It shows someone else. We have been asked repeatedly who, and the honest answer is that it differs by owner and we have stopped collecting the reports." }
];

const SIZES = ["Smaller","Smaller than that","Please stop"];

const TESTIMONIALS = [
  { q:"I bought the $10,000 one and I’ve told four people. So it didn’t work, but that’s on me.", a:"Anonymous, but he’ll tell you" },
  { q:"I ordered the Starter tier. My wife ordered Enterprise. We don’t talk about it, which I think means she won.", a:"Anonymous, Portland" },
  { q:"I’m not comfortable being quoted.", a:"Anonymous, quoted" },
  { q:"I have never felt less special. Five stars. I’m aware that giving it five stars is a problem.", a:"Verified Purchaser, who would like you to know she verified" },
  { q:"Didn’t arrive. Perfect.", a:"(this customer has since asked to be removed from this page)" },
  { q:"The best purchase I’ve ever made and I’ll never be able to prove it, which is the second-best part, and I’ve now ranked them, which ruins it.", a:"Customer since March. Not that it matters. It doesn’t matter." },
  { q:"I wear it every day. There’s nothing to wear. I want to be clear that I understand that.", a:"Name withheld at her request. She requested it loudly." },
  { q:"I bought this to become a more modest person and instead I became a person who talks about a website. Would recommend, with a caveat I’m still working out.", a:"Anonymous" }
];

const FAQ = [
  ["What is Humility Enterprises?","A retailer of status objects whose function is to indicate that you are above status objects. We were not the first to do this. We are the first to say so on the FAQ page."],
  ["Why does everything cost more the less it contains?","Because that’s what you’re actually buying. The object was always the receipt. We removed the object and kept the price, which is the honest version."],
  ["Is this a joke?","Partly. The give button is not."],
  ["Who founded the company?","We’d tell you about our founder, but that would rather defeat the purpose."],
  ["Okay, but is there a founder?","There is a person. They have declined to be a story. This has been a source of some friction internally, as it turns out “founder declines to be a story” is itself an extremely good story, and we have now told it to you twice."],
  ["Why is Enterprise always sold out?","It isn’t held back. There is no stock to release. A thing that consists of nothing and is announced to nobody has no supply curve. “Sold out” is the most accurate two words we have."],
  ["Can I get a certificate of authenticity?","No. That is the product working."],
  ["Why does the Corporate Humility Score keep falling?","Because people keep arriving. We built a scoreboard that punishes us for being looked at, installed it at the top of our own homepage, and have been unable to agree on whether removing it would make the number go up."],
  ["What’s the one thing on this site that actually does something?","The give button. Everything else on this page is a bit. That one goes to a real organization’s own donation page and gives you nothing back — no receipt from us, no confirmation, no share card. We built the whole store to make that button funny. Then we built the button, and it isn’t."]
];

/* -------------------------------------------------- corporate score
   Skip's rule: score the company, not the visitor. It falls as we get looked at. */
(function corporateScore(){
  const el = document.getElementById("corpScore");
  const note = document.getElementById("corpNote");
  if(!el) return;
  const KEY = "he.looks";
  let looks = parseInt(localStorage.getItem(KEY) || "0", 10) + 1;
  localStorage.setItem(KEY, String(looks));

  let score = 902;
  const notes = [
    "recalculating", "adjusting for traffic", "adjusting for this page",
    "adjusting for the scoreboard", "adjusting for having mentioned it"
  ];
  el.textContent = score;
  let i = 0;
  setInterval(() => {
    if(score > 4){ score -= 1; el.textContent = score; }
    if(Math.random() < .08){ note.textContent = notes[(++i) % notes.length]; }
  }, 2600);
})();

/* ---------------------------------------------------------------- catalog render */
(function renderCatalog(){
  const grid = document.getElementById("grid");
  if(!grid) return;
  PRODUCTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-void" data-mark="${p.mark}"></div>
      <h3>${p.name}</h3>
      <p class="card-price">${p.price}</p>
      <p class="card-copy">${p.copy}</p>
      <div class="card-actions">
        <label class="sr-only" for="s-${p.mark.replace(/\W/g,"")}">Size</label>
        <select class="size-sel" id="s-${p.mark.replace(/\W/g,"")}">
          ${SIZES.map(s => `<option>${s}</option>`).join("")}
        </select>
        <button class="acquire">Acquire Quietly</button>
        <p class="size-note" hidden>We’ve stopped.</p>
      </div>`;
    grid.appendChild(card);

    const sel = card.querySelector(".size-sel");
    const note = card.querySelector(".size-note");
    sel.addEventListener("change", () => {
      if(sel.value === "Please stop"){ sel.value = SIZES[0]; note.hidden = false; }
    });
    card.querySelector(".acquire").addEventListener("click", addNothing);
  });
})();

/* ---------------------------------------------------------------- the cart that shrinks */
let cartAdds = 0;
function addNothing(){
  cartAdds++;
  const drawer = document.getElementById("cartDrawer");
  const total = (cartAdds * 780).toLocaleString("en-US",{style:"currency",currency:"USD"});
  document.getElementById("cartCount").textContent = "0";
  document.getElementById("cartItems").textContent = "0 items";
  document.getElementById("cartTotal").textContent = total;
  document.getElementById("cartAdded").textContent = "You have added: Nothing.";
  document.getElementById("cartTimes").textContent =
    cartAdds === 1 ? "You have added it once." : `You have added it ${cartAdds} times.`;
  drawer.hidden = false;
}
document.getElementById("cartBtn").addEventListener("click", () => {
  const d = document.getElementById("cartDrawer"); d.hidden = !d.hidden;
});
document.getElementById("cartClose").addEventListener("click", () => {
  document.getElementById("cartDrawer").hidden = true;
});
document.getElementById("addNothing").addEventListener("click", addNothing);

/* ---------------------------------------------------------------- waitlist */
document.getElementById("waitForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("waitlist").hidden = true;
  document.getElementById("waitResult").hidden = false;
});
document.getElementById("leaveWait").addEventListener("click", () => {
  document.getElementById("leaveNote").hidden = false;
});
document.getElementById("stayWait").addEventListener("click", () => {
  document.getElementById("leaveNote").hidden = false;
  document.getElementById("leaveNote").textContent = "You have stayed. You are #1.";
});

/* ---------------------------------------------------------------- testimonials that redact themselves */
(function renderQuotes(){
  const wrap = document.getElementById("quotes");
  if(!wrap) return;
  TESTIMONIALS.forEach(t => {
    const el = document.createElement("figure");
    el.className = "quote";
    el.innerHTML = `<blockquote>&ldquo;${t.q}&rdquo;</blockquote><cite>&mdash; ${t.a}</cite>`;
    wrap.appendChild(el);
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(!en.isIntersecting) return;
      io.unobserve(en.target);
      const cite = en.target.querySelector("cite");
      setTimeout(() => {
        cite.classList.add("fading");
        setTimeout(() => {
          cite.innerHTML = "&mdash; <em>(withdrew permission to be quoted)</em>";
          cite.classList.remove("fading");
        }, 620);
      }, 8000);
    });
  }, { threshold:.6 });
  wrap.querySelectorAll(".quote").forEach(q => io.observe(q));
})();

/* ---------------------------------------------------------------- reviews: write-only */
(function reviews(){
  const form = document.getElementById("reviewForm");
  const text = document.getElementById("reviewText");
  const counter = document.getElementById("counter");
  const thanks = document.getElementById("reviewThanks");

  document.querySelectorAll("#stars button").forEach(b => {
    b.addEventListener("click", () => {
      const v = +b.dataset.v;
      document.querySelectorAll("#stars button").forEach(o =>
        o.classList.toggle("on", +o.dataset.v <= v));
    });
  });

  text.addEventListener("input", () => {
    const left = 2000 - text.value.length;
    counter.textContent = `${left.toLocaleString("en-US")} characters remaining`;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    form.hidden = true;
    thanks.hidden = false;
  });

  document.getElementById("reviewAgain").addEventListener("click", () => {
    text.value = "";
    counter.textContent = "2,000 characters remaining";
    document.querySelectorAll("#stars button").forEach(o => o.classList.remove("on"));
    thanks.hidden = true;
    form.hidden = false;
    text.focus();
  });
})();

/* ---------------------------------------------------------------- faq */
(function renderFaq(){
  const dl = document.getElementById("faq-list");
  FAQ.forEach(([q,a]) => {
    const dt = document.createElement("dt"); dt.textContent = q;
    const dd = document.createElement("dd"); dd.textContent = a;
    dl.append(dt, dd);
  });
})();

/* ---------------------------------------------------------------- newsletter: unsubscribe-first */
document.getElementById("newsForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("newsForm").hidden = true;
  document.getElementById("newsResult").hidden = false;
});

/* ---------------------------------------------------------------- viewer counter, counting down */
(function viewers(){
  const el = document.getElementById("viewerCount");
  const box = document.getElementById("viewers");
  let n = 1204;
  const t = setInterval(() => {
    n -= Math.ceil(Math.random() * 9);
    if(n <= 1){
      n = 1;
      box.innerHTML = `<span class="dot"></span>1 person is viewing this page. It’s you. It’s been you for a while.`;
      clearInterval(t);
      return;
    }
    el.textContent = n.toLocaleString("en-US");
  }, 1300);
})();

/* ---------------------------------------------------------------- idle reward */
(function idle(){
  const box = document.getElementById("idle");
  let timer, spent = false;
  const arm = () => {
    if(spent) return;
    clearTimeout(timer);
    if(!box.hidden){ box.hidden = true; spent = true; return; }
    timer = setTimeout(() => { if(!spent) box.hidden = false; }, 90000);
  };
  ["mousemove","scroll","keydown","touchstart","click"].forEach(ev =>
    window.addEventListener(ev, arm, { passive:true }));
  arm();
})();

/* ---------------------------------------------------------------- exit intent */
(function exitIntent(){
  const box = document.getElementById("exit");
  let shown = false, armed = false, moved = false;
  // Don't ambush someone who just arrived, and don't fire on a cursor that
  // was already parked at the top of the window before the page loaded.
  setTimeout(() => { armed = true; }, 25000);
  document.addEventListener("mousemove", e => { if(e.clientY > 120) moved = true; }, { passive:true });
  document.addEventListener("mouseout", e => {
    if(shown || !armed || !moved || e.relatedTarget || e.clientY > 8) return;
    shown = true;
    box.hidden = false;
  });
  document.getElementById("exitLeave").addEventListener("click", () => {
    box.hidden = true;
  });
})();
