import { useEffect, useMemo, useState } from "react";
import {
  AppWindow,
  ArrowRight,
  Check,
  Clipboard,
  Hand,
  History,
  Mail,
  MapPin,
  Phone,
  ScanFace,
  ShieldCheck,
  Sparkles,
  VolumeX,
} from "lucide-react";

const contact = {
  email: "julio@aih.tw",
  phone: "0932-006350",
  address: "台北市內湖區文德路210巷30弄50號",
};

const tones = ["高端", "科技感", "促銷", "專業", "親切"];
const platforms = ["LINE", "Facebook", "Instagram", "Threads", "TikTok", "YouTube"];

const navItems = [
  ["首頁", "/#home"],
  ["產品特色", "/#features"],
  ["社群文案", "/social"],
  ["聯絡", "/#contact"],
];

const features = [
  {
    icon: ScanFace,
    title: "3D人臉辨識",
    text: "立體深度感測搭配活體檢測，降低照片、影片與面具攻擊風險。",
  },
  {
    icon: Hand,
    title: "掌靜脈識別",
    text: "讀取掌心靜脈特徵，非接觸、難複製，也適合指紋磨損者。",
  },
  {
    icon: AppWindow,
    title: "手機APP遠端控制",
    text: "查看狀態、建立訪客授權、接收開門紀錄、異常提醒與低電量通知。",
  },
  {
    icon: VolumeX,
    title: "靜音自動鎖體",
    text: "低噪音傳動與自動上鎖設計，夜間返家安靜不打擾。",
  },
];

function SectionLabel({ children }) {
  return <p className="mb-3 text-xs font-bold uppercase text-aqua">{children}</p>;
}

function ButtonLink({ href, children, variant = "primary" }) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition duration-200";
  const variants = {
    primary:
      "bg-gradient-to-r from-neon to-aqua text-space shadow-glow hover:scale-[1.02]",
    secondary:
      "border border-white/18 bg-white/8 text-white hover:border-neon/60 hover:bg-neon/10",
  };

  return (
    <a className={`${base} ${variants[variant]}`} href={href}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 rounded-lg border border-white/14 bg-space/76 px-3 py-3 shadow-luxury backdrop-blur-2xl md:top-5">
      <div className="flex items-center justify-between gap-4">
        <a className="flex items-center gap-3" href="/" aria-label="UZEEK 首頁">
          <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-neon to-aqua text-sm font-black text-space shadow-glow">
            U
          </span>
          <span className="text-sm font-black text-white sm:text-base">UZEEK</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {navItems.map(([label, href]) => (
            <a className="transition hover:text-white" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-black text-space transition hover:bg-neon"
          href="/#contact"
        >
          聯絡預約
        </a>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="./assets/smart-lock-hero.png"
          alt="UZEEK 高端智能電子鎖安裝於現代住宅入口"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.98)_0%,rgba(5,7,13,0.82)_48%,rgba(5,7,13,0.3)_100%),linear-gradient(0deg,#05070d_0%,rgba(5,7,13,0.08)_52%)]" />
        <div className="relative mx-auto grid min-h-screen w-[calc(100%-32px)] max-w-6xl items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.08fr_0.72fr]">
          <div>
            <SectionLabel>Luxury Smart Access</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              UZEEK 高端智能電子鎖
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-tight text-white sm:text-3xl">
              以科技守護家的第一道門。
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              UZEEK 整合 3D 人臉辨識、掌靜脈識別、手機 APP 遠端控制與靜音自動鎖體，為高端住宅、別墅與精品社區打造安全、安靜且具未來感的智慧入口。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">
                聯絡預約安裝 <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="/social" variant="secondary">
                產生社群文案 <Sparkles size={18} />
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm rounded-lg border border-neon/24 bg-panel/78 p-5 shadow-luxury backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase text-slate-300">
              <span>UZEEK Access</span>
              <span className="rounded-full bg-aqua/16 px-3 py-1 text-aqua">Online</span>
            </div>
            <div className="relative grid h-72 place-items-center overflow-hidden rounded-lg border border-white/12 bg-space/76">
              <ScanFace className="text-neon drop-shadow-[0_0_24px_rgba(36,216,255,0.45)]" size={164} strokeWidth={1.2} />
              <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-aqua to-transparent shadow-glow" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 grid w-[calc(100%-32px)] max-w-6xl overflow-hidden rounded-lg border border-white/12 bg-panel/88 shadow-luxury backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["0.3s", "快速辨識"],
          ["3D", "活體防偽"],
          ["24/7", "APP通知"],
          ["L5", "高安全等級"],
        ].map(([value, label]) => (
          <div className="border-b border-white/10 p-5 sm:border-r lg:border-b-0" key={label}>
            <p className="text-3xl font-black text-white">{value}</p>
            <p className="mt-1 text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </section>

      <section id="features" className="mx-auto w-[calc(100%-32px)] max-w-6xl py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Product Features</SectionLabel>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            四大核心功能，打造智慧住宅入口。
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            從辨識、授權到上鎖，UZEEK 將安全性與居住質感整合成完整的智能門鎖體驗。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="rounded-lg border border-white/12 bg-white/[0.06] p-6 shadow-glow backdrop-blur" key={title}>
              <Icon className="mb-6 text-neon" size={30} strokeWidth={1.6} />
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl gap-8 rounded-lg border border-white/12 bg-panel/86 p-6 shadow-luxury md:p-10 lg:grid-cols-[0.86fr_1.14fr]">
      <div>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          聯絡 UZEEK，預約智能鎖安裝諮詢。
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          留下需求後，我們可協助評估門型、安裝環境、功能配置與智慧住宅導入方式。
        </p>
        <div className="mt-8 grid gap-4 text-sm text-slate-300">
          <a className="flex items-center gap-3 hover:text-white" href={`mailto:${contact.email}`}>
            <Mail className="text-aqua" size={18} /> {contact.email}
          </a>
          <a className="flex items-center gap-3 hover:text-white" href={`tel:${contact.phone}`}>
            <Phone className="text-aqua" size={18} /> {contact.phone}
          </a>
          <span className="flex items-center gap-3">
            <MapPin className="text-aqua" size={18} /> {contact.address}
          </span>
        </div>
      </div>

      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          event.currentTarget.reset();
          window.alert("已收到您的諮詢需求，我們將盡快與您聯繫。");
        }}
      >
        <input className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none focus:border-neon" placeholder="姓名" required />
        <input className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none focus:border-neon" placeholder="Email" required type="email" />
        <textarea className="min-h-32 rounded-lg border border-white/12 bg-space/76 px-4 py-3 text-white outline-none focus:border-neon" placeholder="請描述門型、地區或希望導入的功能" />
        <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon to-aqua px-5 font-black text-space shadow-glow" type="submit">
          聯絡預約 <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

function SocialCopyPage() {
  const [topic, setTopic] = useState("老人指紋磨損");
  const [tone, setTone] = useState("高端");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("uzeek-social-copy-history");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const activeCopies = useMemo(() => result?.copies || {}, [result]);

  function saveHistory(nextResult) {
    const nextHistory = [
      {
        id: crypto.randomUUID(),
        topic: nextResult.topic,
        tone: nextResult.tone,
        generatedAt: nextResult.generatedAt,
        copies: nextResult.copies,
      },
      ...history,
    ].slice(0, 12);

    setHistory(nextHistory);
    window.localStorage.setItem("uzeek-social-copy-history", JSON.stringify(nextHistory));
  }

  async function generateCopy(event) {
    event.preventDefault();
    setLoading(true);
    setCopied("");

    try {
      const response = await fetch("/api/social-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, tone }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "文案產生失敗");
      }

      setResult(payload.data);
      saveHistory(payload.data);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function copyText(label, text) {
    await navigator.clipboard.writeText(text);
    setCopied(label);
  }

  return (
    <section className="mx-auto min-h-screen w-[calc(100%-32px)] max-w-6xl pt-28 pb-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Social Copy Generator</SectionLabel>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
            UZEEK U8 社群文案自動產生系統
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            輸入主題後，自動產生 LINE、Facebook、Instagram、Threads、TikTok、YouTube 文案，包含 hashtags、CTA、短影音腳本與 YouTube 影片企劃。系統只產生文案，不會自動發布。
          </p>

          <form className="mt-8 grid gap-4 rounded-lg border border-white/12 bg-panel/80 p-5 shadow-luxury" onSubmit={generateCopy}>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              主題
              <input
                className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none focus:border-neon"
                onChange={(event) => setTopic(event.target.value)}
                placeholder="例如：老人指紋磨損、小孩忘記密碼、夜歸安全"
                value={topic}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              文案語氣
              <select
                className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none focus:border-neon"
                onChange={(event) => setTone(event.target.value)}
                value={tone}
              >
                {tones.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon to-aqua px-5 font-black text-space shadow-glow" disabled={loading} type="submit">
              {loading ? "產生中..." : "產生社群文案"} <Sparkles size={18} />
            </button>
          </form>
        </div>

        <div className="grid gap-4">
          {result ? (
            platforms.map((platform) => (
              <article className="rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-glow" key={platform}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-black text-white">{platform}</h2>
                  <button
                    className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/14 px-3 text-sm font-bold text-slate-200 hover:border-neon hover:text-white"
                    onClick={() => copyText(platform, activeCopies[platform])}
                    type="button"
                  >
                    <Clipboard size={16} /> {copied === platform ? "已複製" : "複製"}
                  </button>
                </div>
                <pre className="whitespace-pre-wrap rounded-lg bg-space/80 p-4 text-sm leading-7 text-slate-200">
                  {activeCopies[platform]}
                </pre>
              </article>
            ))
          ) : (
            <div className="grid min-h-[420px] place-items-center rounded-lg border border-white/12 bg-white/[0.06] p-8 text-center">
              <div>
                <Sparkles className="mx-auto mb-5 text-aqua" size={46} />
                <p className="text-xl font-black text-white">輸入主題後開始產生文案</p>
                <p className="mt-3 text-slate-400">範例：老人指紋磨損、小孩忘記密碼、夜歸安全。</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10 rounded-lg border border-white/12 bg-panel/70 p-5">
        <div className="mb-4 flex items-center gap-2 text-white">
          <History size={20} />
          <h2 className="text-xl font-black">文案紀錄</h2>
        </div>
        {history.length ? (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {history.map((item) => (
              <button
                className="rounded-lg border border-white/10 bg-white/[0.05] p-4 text-left hover:border-neon"
                key={item.id}
                onClick={() => setResult(item)}
                type="button"
              >
                <p className="font-black text-white">{item.topic}</p>
                <p className="mt-1 text-sm text-aqua">{item.tone}</p>
                <p className="mt-3 text-xs text-slate-500">{new Date(item.generatedAt).toLocaleString()}</p>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-slate-400">尚無紀錄。產生文案後會自動儲存在這裡。</p>
        )}
      </section>
    </section>
  );
}

export default function App() {
  const isSocial = window.location.pathname === "/social";

  return (
    <div className="min-h-screen bg-space text-platinum">
      <Header />
      <main>{isSocial ? <SocialCopyPage /> : <HomePage />}</main>
      <footer className="mx-auto flex w-[calc(100%-32px)] max-w-6xl flex-col gap-3 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-black text-white">UZEEK</span>
          <p className="mt-1">高端智能電子鎖品牌</p>
        </div>
        <div className="grid gap-1 sm:text-right">
          <a className="hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="hover:text-white" href={`tel:${contact.phone}`}>{contact.phone}</a>
          <span>{contact.address}</span>
        </div>
      </footer>
    </div>
  );
}
