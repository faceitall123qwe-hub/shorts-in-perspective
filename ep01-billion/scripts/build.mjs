import { build, icon } from "./short.mjs";

// global word times (VO offset included): million .39, eleven 1.67, billion 2.87, thirty-two 4.41,
// trillion 5.92, thirty-one 7.05, back 9.67, painting 11.19, cave 11.71, so 12.88, lifetime 15.67, follow 16.95
const IN = (sel, t, extra = "") => `tl.fromTo($("${sel}"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.45, ease: E${extra} }, ${t});`;
const TAG = `<div class="tag mono">IN PERSPECTIVE · #1</div>`;
const TAGCSS = `@R .tag { position:absolute; left:0; right:0; top:200px; text-align:center; font-size:44px; color:var(--muted); }`;
const NUM = `
@R .num { position:absolute; left:0; right:0; text-align:center; color:var(--text); }
@R .unit { position:absolute; left:0; right:0; text-align:center; color:var(--muted); font-size:64px; }
@R .res { position:absolute; left:0; right:0; display:flex; justify-content:center; align-items:center; gap:28px; color:var(--yellow); }
@R .res .v { font-size:124px; font-weight:700; letter-spacing:-0.04em; }
@R .res .ic { width:110px; height:110px; stroke-width:1.6; }
`;

const scenes = [];

// 1: million
scenes.push({
  start: 0,
  css: `${TAGCSS}${NUM}
@R .n1 { top:500px; font-size:150px; } @R .u1 { top:700px; } @R .r1 { top:860px; }`,
  html: `${TAG}
<div class="num mono n1">0</div><div class="unit u1">seconds</div>
<div class="res r1">${icon("calendar-days")}<span class="v">≈ 11 days</span></div>`,
  js: `
tl.fromTo($(".tag"), { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0);
count(".n1", 0, 1000000, 0.05, 0.75);
${IN(".u1", "T(0.6)")}
${IN(".r1", "T(1.62)")}
tl.fromTo($(".r1 .ic"), { rotate: -8 }, { rotate: 0, duration: 0.4, ease: E }, T(1.62));
`,
});

// 2: billion
scenes.push({
  start: 2.7,
  css: `${TAGCSS}${NUM}
@R .n2 { top:480px; font-size:110px; } @R .u2 { top:650px; } @R .r2 { top:800px; }
@R .life { position:absolute; left:110px; right:110px; top:1080px; }
@R .life .lb { color:var(--muted); font-size:48px; margin-bottom:22px; display:flex; justify-content:space-between; }
@R .bar { height:44px; border-radius:22px; background:var(--line); overflow:hidden; }
@R .bar i { display:block; width:40%; height:100%; background:var(--green); border-radius:22px; }`,
  html: `${TAG}
<div class="num mono n2">0</div><div class="unit u2">seconds</div>
<div class="res r2">${icon("hourglass")}<span class="v">≈ 32 years</span></div>
<div class="life"><div class="lb"><span>a human life</span><span class="mono">80 yrs</span></div><div class="bar"><i></i></div></div>`,
  js: `
count(".n2", 0, 1000000000, T(2.75), 0.9);
${IN(".u2", "T(3.0)")}
${IN(".r2", "T(4.3)")}
${IN(".life", "T(4.6)")}
tl.fromTo($(".bar i"), { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 0.8, ease: "power2.out" }, T(4.75));
`,
});

// 3: trillion
scenes.push({
  start: 5.6,
  css: `${TAGCSS}${NUM}
@R .n3 { top:490px; font-size:88px; } @R .u3 { top:630px; }
@R .r3 { top:790px; flex-direction:column; gap:6px; }
@R .r3 .v { font-size:170px; } @R .r3 .yr { font-size:64px; color:var(--muted); font-weight:500; }`,
  html: `${TAG}
<div class="num mono n3">1,000,000,000,000</div><div class="unit u3">seconds</div>
<div class="res r3"><span class="v mono cnt">0</span><span class="yr">years</span></div>`,
  js: `
${IN(".n3", "T(5.85)")}
${IN(".u3", "T(6.1)")}
${IN(".r3", "T(6.95)")}
count(".cnt", 0, 31700, T(7.0), 2.0);
tl.fromTo($(".cnt"), { scale: 1 }, { scale: 1.06, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1 }, T(9.0));
`,
});

// 4: cave walls
scenes.push({
  start: 9.5,
  css: `${TAGCSS}
@R .ago { position:absolute; left:0; right:0; top:360px; text-align:center; font-size:96px; color:var(--yellow); }
@R .hand { position:absolute; left:340px; top:560px; width:400px; height:400px; color:#d9a24a; }
@R .hand .ic { width:400px; height:400px; stroke-width:1.1; }
@R .cap { position:absolute; left:0; right:0; top:1040px; text-align:center; font-size:64px; color:var(--text); font-weight:600; letter-spacing:-0.02em; }`,
  html: `${TAG}
<div class="ago mono">31,700 years ago</div>
<div class="hand">${icon("hand")}</div>
<div class="cap">people painted cave walls</div>`,
  js: `
${IN(".ago", "T(9.6)")}
tl.fromTo($(".hand"), { opacity: 0, scale: 0.9, rotate: -6 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.7, ease: E }, T(10.6));
${IN(".cap", "T(11.4)")}
`,
});

// 5: same scale
scenes.push({
  start: 12.7,
  css: `${TAGCSS}
@R .ttl { position:absolute; left:0; right:0; top:330px; text-align:center; color:var(--muted); font-size:56px; }
@R .row { position:absolute; left:110px; right:110px; }
@R .row .lb { display:flex; justify-content:space-between; margin-bottom:22px; font-size:52px; }
@R .row .bar { height:64px; border-radius:18px; background:var(--line); position:relative; overflow:hidden; }
@R .row .bar i { position:absolute; left:0; top:0; bottom:0; border-radius:18px; }
@R .r0 { top:500px; } @R .r0 i { width:6px; background:var(--muted); }
@R .r1 { top:720px; } @R .r1 i { width:100%; background:var(--yellow); }
@R .big { position:absolute; left:80px; right:80px; top:980px; text-align:center; font-size:112px; }`,
  html: `${TAG}
<div class="ttl">on the same scale</div>
<div class="row r0"><div class="lb"><span class="mono">1 million s</span><span class="muted">11 days</span></div><div class="bar"><i></i></div></div>
<div class="row r1"><div class="lb"><span class="mono">1 billion s</span><span class="y">32 years</span></div><div class="bar"><i></i></div></div>
<h1 class="hd big">a whole <span class="y">lifetime</span> bigger</h1>`,
  js: `
${IN(".ttl", "T(12.8)")}
${IN(".r0", "T(13.0)")}
${IN(".r1", "T(13.15)")}
tl.fromTo($(".r1 i"), { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 1.2, ease: "power2.out" }, T(13.3));
${IN(".big", "T(15.3)")}
`,
});

// 6: CTA
scenes.push({
  start: 16.75,
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
<div class="nx">next: <span class="y">how big is a trillion dollars?</span></div>`,
  js: `
${IN(".logo", "T(16.8)")}
${IN(".sub", "T(17.2)")}
tl.fromTo($(".fl"), { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.45, ease: E }, T(16.95));
tl.fromTo($(".fl"), { scale: 1 }, { scale: 1.05, duration: 0.18, ease: "power2.out", yoyo: true, repeat: 1 }, T(18.2));
${IN(".nx", "T(18.0)")}
`,
});

build({
  title: "A million vs a billion seconds",
  scenes,
  sfx: [
    ["pop", 1.6, 0.72, 0.3, 13],
    ["pop", 4.3, 0.72, 0.3, 13],
    ["click-soft", 9.0, 0.365, 0.4, 13],
    ["chime", 16.9, 2.5, 0.2, 15],
  ],
});
