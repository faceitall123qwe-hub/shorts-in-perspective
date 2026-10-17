import { build, icon } from "./short.mjs";

// global word times: trillion 1.09, million 2.41, stack 4.48, meter 5.37, billion 6.38, kilometer 7.38, Khalifa 9.12,
// trillion 10.04, thousand 11.79, space 13.01, twice 14.48, Station 16.61, spending 17.74, day 19.71, one 20.66, trillion 22.21, Follow 23.08
const IN = (sel, t, extra = "") => `tl.fromTo($("${sel}"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.45, ease: E${extra} }, ${t});`;
const TAG = `<div class="tag mono">IN PERSPECTIVE · #2</div>`;
const TAGCSS = `@R .tag { position:absolute; left:0; right:0; top:200px; text-align:center; font-size:44px; color:var(--muted); }`;
const scenes = [];

// 1: hook
scenes.push({
  start: 0,
  css: `${TAGCSS}
@R .big { position:absolute; left:0; right:0; top:560px; text-align:center; font-size:150px; }
@R .full { position:absolute; left:0; right:0; top:760px; text-align:center; font-size:76px; color:var(--muted); }
@R .q { position:absolute; left:0; right:0; top:900px; text-align:center; font-size:200px; font-weight:700; color:var(--yellow); }`,
  html: `${TAG}
<h1 class="hd big">$1 <span class="g">trillion</span></h1>
<div class="full mono">$1,000,000,000,000</div>
<div class="q">?</div>`,
  js: `
tl.fromTo($(".tag"), { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0);
${IN(".big", "0.05")}
${IN(".full", "T(1.1)")}
tl.fromTo($(".q"), { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.4, ease: E }, T(1.4));
`,
});

// 2: million = 1.1 m stack vs person (1.8 m = 600 px)
scenes.push({
  start: 2.2,
  css: `${TAGCSS}
@R .ttl { position:absolute; left:0; right:0; top:330px; text-align:center; font-size:96px; }
@R .sub { position:absolute; left:0; right:0; top:450px; text-align:center; font-size:52px; color:var(--muted); }
@R .ground { position:absolute; left:120px; right:120px; top:1250px; height:4px; background:var(--line); }
@R .person { position:absolute; left:250px; top:650px; width:240px; height:600px; border-radius:14px 14px 0 0; background:var(--line); border:3px solid #4a5751; border-bottom:none;
  display:flex; align-items:flex-start; justify-content:center; padding-top:30px; color:var(--muted); }
@R .person .ic { width:110px; height:110px; stroke-width:1.5; }
@R .stack { position:absolute; left:600px; top:886px; width:240px; height:364px; border-radius:14px 14px 0 0; background:rgba(62,224,143,.18); border:3px solid var(--green); border-bottom:none;
  display:flex; align-items:center; justify-content:center; color:var(--green); }
@R .stack .ic { width:110px; height:110px; stroke-width:1.5; }
@R .h1 { position:absolute; left:560px; top:800px; width:320px; text-align:center; font-size:60px; color:var(--yellow); }
@R .hp { position:absolute; left:220px; top:1270px; width:300px; text-align:center; font-size:48px; color:var(--muted); }
@R .hs { position:absolute; left:560px; top:1270px; width:320px; text-align:center; font-size:48px; color:var(--green); }`,
  html: `${TAG}
<h1 class="hd ttl">$1 <span class="g">million</span></h1>
<div class="sub mono">10,000 × $100 bills</div>
<div class="person">${icon("user")}</div>
<div class="stack">${icon("banknote")}</div>
<div class="ground"></div>
<div class="h1 mono">≈ 1.1 m</div>
<div class="hp">you · 1.8 m</div><div class="hs">the stack</div>`,
  js: `
${IN(".ttl", "T(2.3)")}
${IN(".sub", "T(3.2)")}
tl.fromTo([$(".ground"), $(".person"), $(".hp")], { opacity: 0 }, { opacity: 1, duration: 0.4 }, T(3.4));
tl.fromTo($(".stack"), { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.9, ease: E }, T(4.4));
tl.fromTo($(".hs"), { opacity: 0 }, { opacity: 1, duration: 0.3 }, T(4.5));
tl.fromTo($(".h1"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: E }, T(5.3));
`,
});

// 3: billion vs Burj Khalifa (1,092 m = 800 px)
scenes.push({
  start: 6.2,
  css: `${TAGCSS}
@R .ttl { position:absolute; left:0; right:0; top:330px; text-align:center; font-size:96px; }
@R .ground { position:absolute; left:120px; right:120px; top:1250px; height:4px; background:var(--line); }
@R .bar { position:absolute; bottom:${1920 - 1250}px; width:220px; border-radius:16px 16px 0 0; }
@R .bk { left:250px; height:485px; background:var(--line); border:3px solid #4a5751; border-bottom:none; }
@R .bs { left:610px; height:640px; background:rgba(62,224,143,.18); border:3px solid var(--green); border-bottom:none; }
@R .v { position:absolute; width:300px; text-align:center; font-size:56px; }
@R .vk { left:210px; top:${1250 - 485 - 80}px; color:var(--muted); } @R .vs { left:570px; top:${1250 - 640 - 80}px; color:var(--green); }
@R .n { position:absolute; top:1270px; width:300px; text-align:center; font-size:48px; }
@R .nk { left:210px; color:var(--muted); } @R .ns { left:570px; color:var(--text); }`,
  html: `${TAG}
<h1 class="hd ttl">$1 <span class="g">billion</span></h1>
<div class="bar bk"></div><div class="bar bs"></div><div class="ground"></div>
<div class="v vk mono">828 m</div><div class="v vs mono">1,092 m</div>
<div class="n nk">Burj Khalifa</div><div class="n ns">the stack</div>`,
  js: `
${IN(".ttl", "T(6.3)")}
tl.fromTo($(".bs"), { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 1.0, ease: E }, T(6.9));
tl.fromTo([$(".vs"), $(".ns")], { opacity: 0 }, { opacity: 1, duration: 0.3 }, T(7.4));
tl.fromTo([$(".ground")], { opacity: 0 }, { opacity: 1, duration: 0.3 }, T(6.9));
tl.fromTo($(".bk"), { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.8, ease: E }, T(8.3));
tl.fromTo([$(".vk"), $(".nk")], { opacity: 0 }, { opacity: 1, duration: 0.3 }, T(8.8));
`,
});

// 4: trillion into space: 0..1100 km mapped to y 1250..300
const y = (km) => Math.round(1250 - (km / 1100) * 950);
scenes.push({
  start: 9.8,
  css: `${TAGCSS}
@R .ttl { position:absolute; left:0; right:0; top:200px; text-align:center; font-size:84px; }
@R .ground { position:absolute; left:120px; right:120px; top:1250px; height:4px; background:var(--green); }
@R .gl { position:absolute; left:120px; top:1270px; font-size:48px; color:var(--muted); }
@R .iss { position:absolute; left:120px; right:120px; top:${y(420)}px; height:3px; background:repeating-linear-gradient(90deg, var(--yellow) 0 18px, transparent 18px 32px); }
@R .il { position:absolute; left:120px; top:${y(420) - 90}px; display:flex; align-items:center; gap:16px; color:var(--yellow); font-size:48px; }
@R .il .ic { width:64px; height:64px; stroke-width:1.5; }
@R .col { position:absolute; left:640px; width:160px; top:${y(1092)}px; height:${1250 - y(1092)}px; background:rgba(62,224,143,.2); border:3px solid var(--green); border-bottom:none; border-radius:14px 14px 0 0; }
@R .km { position:absolute; left:200px; top:${y(1092) - 4}px; width:420px; white-space:nowrap; text-align:right; font-size:60px; color:var(--green); }
@R .x { position:absolute; left:140px; top:${y(760)}px; font-size:84px; font-weight:700; color:var(--yellow); }`,
  html: `
<h1 class="hd ttl">$1 <span class="g">trillion</span></h1>
<div class="iss"></div>
<div class="il">${icon("satellite")}<span>ISS · 420 km</span></div>
<div class="col"></div>
<div class="km mono">0 km</div>
<div class="ground"></div><div class="gl">Earth</div>
<div class="x mono">×2.6</div>`,
  js: `
${IN(".ttl", "T(9.9)")}
tl.fromTo([$(".ground"), $(".gl")], { opacity: 0 }, { opacity: 1, duration: 0.3 }, T(10.0));
tl.fromTo($(".col"), { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 2.6, ease: "power2.inOut" }, T(10.4));
tl.fromTo($(".km"), { y: ${1250 - y(1092)} }, { y: 0, duration: 2.6, ease: "power2.inOut" }, T(10.4));
count(".km", 0, 1092, T(10.4), 2.6, function (v) { return Math.round(v).toLocaleString("en-US") + " km"; });
tl.fromTo([$(".iss"), $(".il")], { opacity: 0 }, { opacity: 1, duration: 0.4 }, T(13.9));
tl.fromTo($(".x"), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: E }, T(14.45));
`,
});

// 5: spending since year 1
scenes.push({
  start: 17.2,
  css: `${TAGCSS}
@R .rate { position:absolute; left:0; right:0; top:420px; text-align:center; font-size:96px; color:var(--text); }
@R .rate .u { color:var(--muted); font-size:64px; }
@R .since { position:absolute; left:0; right:0; top:560px; text-align:center; font-size:60px; color:var(--muted); }
@R .tot { position:absolute; left:0; right:0; top:760px; text-align:center; font-size:120px; color:var(--green); }
@R .pb { position:absolute; left:120px; right:120px; top:960px; }
@R .pb .row { display:flex; justify-content:space-between; font-size:48px; color:var(--muted); margin-bottom:20px; }
@R .pb .bar { height:56px; border-radius:28px; background:var(--line); overflow:hidden; }
@R .pb .bar i { display:block; width:74%; height:100%; border-radius:28px; background:var(--green); }
@R .no { position:absolute; left:0; right:0; top:1140px; text-align:center; font-size:76px; font-weight:700; color:var(--yellow); letter-spacing:-0.03em; }`,
  html: `${TAG}
<div class="rate mono">$1,000,000<span class="u"> / day</span></div>
<div class="since">every day since year 1</div>
<div class="tot mono">$0</div>
<div class="pb"><div class="row"><span>spent</span><span class="mono">$1T</span></div><div class="bar"><i></i></div></div>
<div class="no">still not a trillion</div>`,
  js: `
${IN(".rate", "T(17.7)")}
${IN(".since", "T(20.1)")}
tl.fromTo([$(".tot"), $(".pb")], { opacity: 0 }, { opacity: 1, duration: 0.3 }, T(19.1));
count(".tot", 0, 740, T(19.2), 2.2, function (v) { return "$" + Math.round(v) + "B"; });
tl.fromTo($(".pb .bar i"), { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 2.2, ease: "power2.out" }, T(19.2));
tl.fromTo($(".no"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: E }, T(21.3));
`,
});

// 6: CTA
scenes.push({
  start: 22.9,
  exit: 0.5,
  css: `
@R .logo { position:absolute; left:0; right:0; top:420px; text-align:center; font-size:128px; line-height:0.95; }
@R .sub { position:absolute; left:0; right:0; top:720px; text-align:center; color:var(--muted); font-size:56px; }
@R .fl { position:absolute; left:290px; top:860px; width:500px; height:130px; border-radius:65px; background:var(--green); color:#0b0e0d;
  display:flex; align-items:center; justify-content:center; gap:20px; font-size:60px; font-weight:700; }
@R .fl .ic { width:56px; height:56px; stroke-width:2.4; }
@R .nx { position:absolute; left:80px; right:80px; top:1090px; text-align:center; font-size:52px; color:var(--text); }`,
  html: `
<h1 class="hd logo">IN<br><span class="g">PERSPECTIVE</span></h1>
<div class="sub">numbers you can feel</div>
<div class="fl">${icon("plus")}Follow</div>
<div class="nx">next: <span class="y">how far away is the Moon?</span></div>`,
  js: `
${IN(".logo", "T(22.95)")}
${IN(".sub", "T(23.3)")}
tl.fromTo($(".fl"), { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.45, ease: E }, T(23.1));
tl.fromTo($(".fl"), { scale: 1 }, { scale: 1.05, duration: 0.18, ease: "power2.out", yoyo: true, repeat: 1 }, T(24.3));
${IN(".nx", "T(24.0)")}
`,
});

build({
  title: "How big is a trillion dollars",
  scenes,
  sfx: [
    ["pop", 1.4, 0.72, 0.3, 13],
    ["pop", 5.3, 0.72, 0.3, 13],
    ["click-soft", 14.45, 0.365, 0.45, 13],
    ["click-soft", 21.3, 0.365, 0.45, 14],
    ["chime", 23.0, 2.5, 0.2, 15],
  ],
});
