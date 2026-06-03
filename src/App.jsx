import {
  AppWindow,
  ArrowRight,
  Check,
  Fingerprint,
  Hand,
  Lock,
  Mail,
  MapPin,
  Phone,
  ScanFace,
  ShieldCheck,
  Sparkles,
  VolumeX,
  Wifi,
} from "lucide-react";

const navItems = [
  ["首頁", "#home"],
  ["產品特色", "#features"],
  ["3D 人臉辨識", "#face"],
  ["掌靜脈", "#palm"],
  ["手機 APP", "#app"],
  ["聯絡", "#contact"],
];

const featureCards = [
  {
    icon: ScanFace,
    title: "3D 人臉辨識",
    text: "以立體深度感測建立臉部輪廓，不依賴平面影像，提升豪宅入口的辨識速度與防偽能力。",
  },
  {
    icon: Hand,
    title: "掌靜脈識別",
    text: "讀取掌心靜脈特徵，降低指紋磨損、濕手或光線變化造成的辨識干擾。",
  },
  {
    icon: AppWindow,
    title: "手機 APP 遠端控制",
    text: "即時查看門鎖狀態、臨時授權訪客、接收開門紀錄，外出也能掌握居家入口。",
  },
  {
    icon: VolumeX,
    title: "靜音自動鎖體",
    text: "低噪音馬達與自動上鎖流程，適合夜間返家、長輩與高級住宅社區使用。",
  },
];

const metrics = [
  ["0.3s", "AI 快速解鎖"],
  ["99.9%", "活體辨識準確率"],
  ["24/7", "APP 即時監控"],
  ["AES", "高強度資料加密"],
];

const appEvents = ["玄關門已上鎖", "訪客 PIN 已建立", "掌靜脈解鎖成功"];

function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase text-aqua">
      {children}
    </p>
  );
}

function ButtonLink({ href, children, variant = "primary" }) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition duration-200";
  const variants = {
    primary:
      "bg-gradient-to-r from-neon to-aqua text-space shadow-glow hover:scale-[1.02]",
    secondary:
      "border border-white/18 bg-white/8 text-platinum hover:border-neon/60 hover:bg-neon/10",
  };

  return (
    <a className={`${base} ${variants[variant]}`} href={href}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 rounded-lg border border-white/14 bg-space/72 px-3 py-3 shadow-luxury backdrop-blur-2xl md:top-5">
      <div className="flex items-center justify-between gap-3">
        <a className="flex items-center gap-3" href="#home" aria-label="NOVA LOCK AI 首頁">
          <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-neon to-aqua text-lg font-black text-space shadow-glow">
            N
          </span>
          <span className="min-w-0 text-sm font-black text-white sm:text-base">
            NOVA LOCK AI
          </span>
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
          href="#contact"
        >
          預約諮詢
        </a>
      </div>
    </header>
  );
}

function HeroConsole() {
  return (
    <div className="float-panel relative mx-auto w-full max-w-sm rounded-lg border border-neon/24 bg-panel/78 p-5 shadow-luxury backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase text-slate-300">
        <span>Access Online</span>
        <span className="rounded-full bg-aqua/16 px-3 py-1 text-aqua">Secure</span>
      </div>
      <div className="relative grid h-72 place-items-center overflow-hidden rounded-lg border border-white/12 bg-space/76">
        <div className="absolute inset-5 rounded-lg border border-neon/30" />
        <div className="pulse-ring relative h-44 w-36 rounded-[48%_48%_42%_42%] border-2 border-neon/80 bg-neon/5 shadow-glow">
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/30" />
          <div className="absolute left-8 top-16 size-2 rounded-full bg-aqua shadow-glow" />
          <div className="absolute right-8 top-16 size-2 rounded-full bg-aqua shadow-glow" />
          <div className="absolute bottom-12 left-1/2 h-7 w-16 -translate-x-1/2 rounded-full border-b border-aqua/60" />
        </div>
        <div className="scan-line absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-aqua to-transparent shadow-glow" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/12 bg-white/6 p-4">
          <p className="text-xs text-slate-400">辨識速度</p>
          <p className="mt-1 text-2xl font-black text-white">0.3s</p>
        </div>
        <div className="rounded-lg border border-white/12 bg-white/6 p-4">
          <p className="text-xs text-slate-400">安全層級</p>
          <p className="mt-1 text-2xl font-black text-white">L5</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="./assets/smart-lock-hero.png"
        alt="高端智能電子鎖安裝於豪宅玄關"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.98)_0%,rgba(5,7,13,0.8)_48%,rgba(5,7,13,0.34)_100%),linear-gradient(0deg,#05070d_0%,rgba(5,7,13,0.08)_48%)]" />
      <div className="relative mx-auto grid min-h-screen w-[calc(100%-32px)] max-w-6xl items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.08fr_0.72fr]">
        <div>
          <SectionLabel>Luxury Smart Access</SectionLabel>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
            用 AI 守護高端住宅的第一道門
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            NOVA LOCK AI 整合 3D 人臉辨識、掌靜脈識別、手機 APP 遠端控制與靜音自動鎖體，為豪宅、別墅與高級社區打造安靜、快速且具未來感的智慧入口。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">
              預約產品簡報 <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary">
              查看核心功能
            </ButtonLink>
          </div>
        </div>
        <HeroConsole />
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="relative z-10 mx-auto -mt-8 grid w-[calc(100%-32px)] max-w-6xl overflow-hidden rounded-lg border border-white/12 bg-panel/88 shadow-luxury backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(([value, label]) => (
        <div className="border-b border-white/10 p-5 sm:border-r lg:border-b-0" key={label}>
          <p className="text-3xl font-black text-white">{value}</p>
          <p className="mt-1 text-sm text-slate-400">{label}</p>
        </div>
      ))}
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto w-[calc(100%-32px)] max-w-6xl py-20 md:py-28">
      <div className="max-w-3xl">
        <SectionLabel>Product Features</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          從辨識、授權到鎖體結構，完整升級入口安全體驗
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          為高端住宅場景設計，將生物辨識、遠端管理、資料加密與低噪音鎖體整合成一套可部署的智慧門鎖品牌方案。
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map(({ icon: Icon, title, text }) => (
          <article className="rounded-lg border border-white/12 bg-white/[0.06] p-6 shadow-glow backdrop-blur" key={title}>
            <div className="mb-6 grid size-12 place-items-center rounded-lg border border-neon/30 bg-neon/10 text-neon">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaceSection() {
  return (
    <section id="face" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-10 py-16 lg:grid-cols-2">
      <div>
        <SectionLabel>3D Face Recognition</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          3D 人臉辨識，確認真人與立體輪廓
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          透過深度感測與活體檢測，判斷臉部空間結構與微動態特徵，降低照片、影片與面具攻擊風險。
        </p>
        <ul className="mt-7 grid gap-3 text-slate-200">
          {["低光源環境仍可辨識", "支援多位家庭成員建檔", "異常嘗試即時推送通知"].map((item) => (
            <li className="flex gap-3" key={item}>
              <Check className="mt-1 shrink-0 text-aqua" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative grid min-h-[360px] place-items-center rounded-lg border border-neon/20 bg-panel/70 p-8 shadow-luxury">
        <div className="absolute inset-6 rounded-lg border border-white/10" />
        <ScanFace className="relative text-neon drop-shadow-[0_0_24px_rgba(36,216,255,0.45)]" size={180} strokeWidth={1.2} />
        <div className="scan-line absolute left-10 right-10 top-1/2 h-px bg-gradient-to-r from-transparent via-aqua to-transparent" />
      </div>
    </section>
  );
}

function PalmSection() {
  return (
    <section id="palm" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-10 py-16 lg:grid-cols-2">
      <div className="relative order-2 grid min-h-[360px] place-items-center rounded-lg border border-aqua/20 bg-panel/70 p-8 shadow-luxury lg:order-1">
        <div className="absolute inset-6 rounded-lg border border-white/10" />
        <Hand className="relative text-aqua drop-shadow-[0_0_24px_rgba(73,245,198,0.42)]" size={178} strokeWidth={1.1} />
        <div className="absolute h-56 w-40 rounded-full bg-[linear-gradient(120deg,transparent_44%,rgba(255,205,91,0.85)_45%,transparent_47%),linear-gradient(65deg,transparent_48%,rgba(36,216,255,0.62)_49%,transparent_51%),linear-gradient(150deg,transparent_46%,rgba(73,245,198,0.58)_47%,transparent_50%)] opacity-75" />
      </div>
      <div className="order-1 lg:order-2">
        <SectionLabel>Palm Vein</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          掌靜脈識別，讓鑰匙回到你的身體裡
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          掌靜脈特徵位於皮膚下方，不易被複製或外露，適合重視隱私與安全等級的住宅、辦公室與私人會所。
        </p>
        <ul className="mt-7 grid gap-3 text-slate-200">
          {["非接觸式辨識更衛生", "不怕指紋磨損或濕手", "生物資料本機加密儲存"].map((item) => (
            <li className="flex gap-3" key={item}>
              <Check className="mt-1 shrink-0 text-aqua" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section id="app" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-10 rounded-lg border border-white/12 bg-[linear-gradient(135deg,rgba(16,24,39,0.94),rgba(5,7,13,0.94))] p-6 shadow-luxury md:p-10 lg:grid-cols-[1fr_360px]">
      <div>
        <SectionLabel>Mobile App</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          手機 APP 遠端控制，每一次開門都有紀錄
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          管理家庭成員、訪客臨時密碼與門鎖狀態，並在異常嘗試、低電量或門未關妥時即時通知。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#contact">
            申請 Demo <Wifi size={18} />
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            導入規劃
          </ButtonLink>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[340px] rounded-[28px] border border-white/16 bg-space p-5 shadow-luxury">
        <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-white/20" />
        <div className="rounded-lg border border-neon/24 bg-neon/8 p-5">
          <p className="text-sm text-slate-400">Front Door</p>
          <p className="mt-2 text-2xl font-black text-white">已上鎖</p>
          <button className="mt-5 inline-flex h-28 w-full items-center justify-center rounded-lg bg-gradient-to-r from-neon to-aqua text-lg font-black text-space">
            遠端解鎖
          </button>
        </div>
        <div className="mt-4 grid gap-3">
          {appEvents.map((event) => (
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-3 text-sm text-slate-300" key={event}>
              <ShieldCheck className="text-aqua" size={17} />
              {event}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SilentLockSection() {
  return (
    <section id="silent-lock" className="mx-auto w-[calc(100%-32px)] max-w-6xl py-20">
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-white/12 bg-white/[0.06] p-6 md:col-span-2">
          <SectionLabel>Silent Auto Lock</SectionLabel>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            靜音自動鎖體，深夜返家不打擾
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            鎖體採用低噪音傳動與緩衝閉合設計，門扇關閉後自動偵測上鎖狀態，兼顧安全與居住品質。
          </p>
        </article>
        <article className="grid place-items-center rounded-lg border border-aqua/20 bg-aqua/8 p-8 text-center">
          <VolumeX className="mb-5 text-aqua" size={58} />
          <p className="text-4xl font-black text-white">Silent</p>
          <p className="mt-2 text-sm text-slate-400">低噪音自動上鎖</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl gap-8 rounded-lg border border-white/12 bg-panel/86 p-6 shadow-luxury md:p-10 lg:grid-cols-[0.86fr_1.14fr]">
      <div>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          預約智能電子鎖品牌導入諮詢
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          留下需求後，我們可協助規劃產品頁、銷售漏斗、AI 社群內容與後續自動化系統。
        </p>
        <div className="mt-8 grid gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-3">
            <Mail className="text-aqua" size={18} /> hello@novalock.ai
          </span>
          <span className="flex items-center gap-3">
            <Phone className="text-aqua" size={18} /> +886 2 0000 8888
          </span>
          <span className="flex items-center gap-3">
            <MapPin className="text-aqua" size={18} /> Taipei · Premium Smart Living
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
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          姓名
          <input className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none transition focus:border-neon focus:ring-4 focus:ring-neon/10" name="name" placeholder="請輸入姓名" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          Email
          <input className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none transition focus:border-neon focus:ring-4 focus:ring-neon/10" name="email" placeholder="hello@example.com" required type="email" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          需求類型
          <select className="min-h-12 rounded-lg border border-white/12 bg-space/76 px-4 text-white outline-none transition focus:border-neon focus:ring-4 focus:ring-neon/10" name="type">
            <option>智能鎖品牌官網</option>
            <option>AI 社群自動化</option>
            <option>產品銷售頁與廣告素材</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          留言
          <textarea className="min-h-32 rounded-lg border border-white/12 bg-space/76 px-4 py-3 text-white outline-none transition focus:border-neon focus:ring-4 focus:ring-neon/10" name="message" placeholder="請描述品牌、產品型號或導入目標" />
        </label>
        <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon to-aqua px-5 font-black text-space shadow-glow transition hover:scale-[1.01]" type="submit">
          送出諮詢 <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-platinum">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <FaceSection />
        <PalmSection />
        <AppSection />
        <SilentLockSection />
        <Contact />
      </main>
      <footer className="mx-auto flex w-[calc(100%-32px)] max-w-6xl flex-col gap-2 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-black text-white">NOVA LOCK AI</span>
        <span>Smart access for future living.</span>
      </footer>
    </div>
  );
}
