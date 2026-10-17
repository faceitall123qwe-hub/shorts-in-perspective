import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { mkdirSync, renameSync, rmSync, readdirSync } from "node:fs";
import { join } from "node:path";

const VOICE = "en-US-AndrewNeural";
const RATE = "+6%";
const text =
  "How big is a trillion dollars? A million dollars in hundred-dollar bills makes a stack about one meter tall. A billion? Over a kilometer. Taller than the Burj Khalifa. A trillion dollars would reach more than a thousand kilometers into space. That is over twice as high as the International Space Station. Or try spending a million dollars every single day since the year one. You still would not have spent a trillion. Follow for more numbers, put in perspective.";

const out = "assets/audio";
const tmp = join(out, "tmp");
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });
const tts = new MsEdgeTTS();
await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3, { wordBoundaryEnabled: true });
await tts.toFile(tmp, text, { rate: RATE });
tts.close();
for (const f of readdirSync(tmp)) renameSync(join(tmp, f), join(out, f.endsWith(".mp3") ? "vo.mp3" : "vo.json"));
rmSync(tmp, { recursive: true, force: true });
console.log("ok");
