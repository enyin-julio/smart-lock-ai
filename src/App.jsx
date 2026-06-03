import {
  AppWindow,
  ArrowRight,
  Check,
  Hand,
  Mail,
  MapPin,
  Phone,
  ScanFace,
  ShieldCheck,
  VolumeX,
} from "lucide-react";

const navItems = [
  ["首頁", "#home"],
  ["特色", "#features"],
  ["人臉辨識", "#face"],
  ["掌靜脈", "#palm"],
  ["手機 APP", "#app"],
  ["聯絡", "#contact"],
];

const features = [
  {
    icon: ScanFace,
    title: "3D人臉辨識",
    text: "透過立體深度感測與活體檢測，快速確認真人輪廓，降低照片、影片與面具攻擊風險。",
  },
  {
    icon: Hand,
    title: "掌靜脈",
    text: "讀取掌心靜脈特徵，非接觸、難複製，也適合指紋較淺或指紋磨損的使用者。",
  },
  {
    icon: AppWindow,
    title: "手機APP",
    text: "遠端查看門鎖狀態、建立訪客授權、接收開門紀錄與異常提醒。",
  },
  {
    icon: VolumeX,
    title: "靜音自動鎖體",
    text: "低噪音傳動與自動上鎖設計，夜間返家安靜不打擾。",
  },
];

const specs = [
  ["0.3s", "快速解鎖"],
  ["3D", "活體辨識"],
  ["24/7", "APP 即時通知"],
  ["L5", "高安全等級"],
];

function ButtonLink({ href, children, variant = "dark" }) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition";
  const variants = {
    dark: "bg-neutral-950 text-white hover:bg-neutral-800",
    light: "border border-neutral-300 bg-white text-neutral-950 hover:border-neutral-950",
  };

  return (
    <a className={`${base} ${variants[variant]}`} href={href}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-14 w-[calc(100%-32px)] max-w-6xl items-center justify-between gap-4">
        <a className="flex items-center gap-2" href="#home" aria-label="UZEEK U8 首頁">
          <span className="grid size-8 place-items-center rounded-lg bg-neutral-950 text-xs font-bold text-white">
            U8
          </span>
          <span className="text-sm font-semibold text-neutral-950">UZEEK U8</span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-neutral-600 md:flex">
          {navItems.map(([label, href]) => (
            <a className="hover:text-neutral-950" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-9 items-center justify-center rounded-lg bg-neutral-950 px-4 text-xs font-semibold text-white hover:bg-neutral-800"
          href="#contact"
        >
          預約
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f5f5f7] pt-20">
      <div className="mx-auto w-[calc(100%-32px)] max-w-6xl py-16 text-center md:py-24">
        <p className="mb-3 text-sm font-semibold text-neutral-500">Smart Lock for Modern Living</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-none text-neutral-950 sm:text-6xl lg:text-7xl">
          UZEEK U8
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-2xl font-medium leading-tight text-neutral-900 sm:text-3xl">
          讓家的第一道門，安靜、聰明、漂亮。
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
          UZEEK U8 整合 3D 人臉辨識、掌靜脈、手機 APP 與靜音自動鎖體，為高端住宅打造更自然的智慧入口體驗。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#contact">
            預約安裝 <ArrowRight size={17} />
          </ButtonLink>
          <ButtonLink href="#features" variant="light">
            了解功能
          </ButtonLink>
        </div>
      </div>

      <div className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden md:rounded-lg">
        <img
          className="h-full w-full object-cover"
          src="./assets/smart-lock-hero.png"
          alt="UZEEK U8 智能電子鎖產品情境"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-6xl grid-cols-2 gap-px py-12 md:grid-cols-4">
        {specs.map(([value, label]) => (
          <div className="bg-[#f5f5f7] p-6 text-center" key={label}>
            <p className="text-3xl font-semibold text-neutral-950">{value}</p>
            <p className="mt-2 text-sm text-neutral-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-[calc(100%-32px)] max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold text-neutral-500">Core Features</p>
          <h2 className="text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            一次升級四種解鎖體驗。
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            不是把功能堆上門，而是讓每一次進出都更順手、更安全、更安靜。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="rounded-lg bg-[#f5f5f7] p-6" key={title}>
              <Icon className="mb-6 text-neutral-950" size={30} strokeWidth={1.6} />
              <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaceSection() {
  return (
    <section id="face" className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-400">3D Face Recognition</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            看見你，才開門。
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            3D 人臉辨識建立立體輪廓，搭配活體檢測與低光源辨識，讓返家不需要翻找鑰匙，也不必觸碰門鎖。
          </p>
          <ul className="mt-8 grid gap-4 text-neutral-200">
            {["支援低光源辨識", "降低照片與影片偽造風險", "適合家庭成員快速通行"].map((item) => (
              <li className="flex gap-3" key={item}>
                <Check className="mt-1 shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid min-h-[360px] place-items-center rounded-lg bg-white/8">
          <ScanFace size={190} strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}

function PalmSection() {
  return (
    <section id="palm" className="bg-[#f5f5f7] py-20 md:py-28">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="order-2 grid min-h-[360px] place-items-center rounded-lg bg-white lg:order-1">
          <Hand size={190} strokeWidth={1.2} />
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold text-neutral-500">Palm Vein</p>
          <h2 className="text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            掌心，就是通行證。
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            掌靜脈特徵位於皮膚下方，不易被複製或外露。對長者、手指乾燥或指紋磨損者，也能提供更穩定的解鎖選項。
          </p>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section id="app" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-500">Mobile App</p>
          <h2 className="text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            門鎖狀態，隨時在手上。
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            使用手機 APP 查看開門紀錄、建立訪客授權、接收異常提醒。家人、小孩、長者的進出狀態，都能更安心掌握。
          </p>
        </div>
        <div className="mx-auto w-full max-w-[340px] rounded-[32px] border border-neutral-200 bg-neutral-950 p-5 text-white shadow-2xl">
          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-white/20" />
          <div className="rounded-lg bg-white p-5 text-neutral-950">
            <p className="text-sm text-neutral-500">Front Door</p>
            <p className="mt-2 text-3xl font-semibold">已上鎖</p>
            <button className="mt-6 min-h-24 w-full rounded-lg bg-neutral-950 font-semibold text-white">
              遠端解鎖
            </button>
          </div>
          <div className="mt-4 grid gap-3">
            {["訪客授權已建立", "掌靜脈解鎖成功", "低電量提醒"].map((event) => (
              <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-sm" key={event}>
                <ShieldCheck size={17} />
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SilentLockSection() {
  return (
    <section className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto w-[calc(100%-32px)] max-w-6xl text-center">
        <VolumeX className="mx-auto mb-8" size={58} strokeWidth={1.2} />
        <p className="mb-3 text-sm font-semibold text-neutral-400">Silent Auto Lock</p>
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          安靜上鎖，安全不用提醒。
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          低噪音傳動與自動上鎖設計，讓深夜返家、孩子睡眠與高級住宅環境都能維持安靜。
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f7] py-20 md:py-28">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-500">Contact</p>
          <h2 className="text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            預約 UZEEK U8 安裝諮詢。
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            留下需求後，我們可協助評估門型、安裝環境、功能配置與智慧住宅導入方式。
          </p>
          <div className="mt-8 grid gap-4 text-sm text-neutral-600">
            <span className="flex items-center gap-3">
              <Mail size={18} /> hello@uzeek-u8.com
            </span>
            <span className="flex items-center gap-3">
              <Phone size={18} /> +886 2 0000 8888
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={18} /> Taipei · Premium Smart Living
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
          <label className="grid gap-2 text-sm font-semibold text-neutral-700">
            姓名
            <input className="min-h-12 rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-neutral-950" name="name" placeholder="請輸入姓名" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-neutral-700">
            Email
            <input className="min-h-12 rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-neutral-950" name="email" placeholder="hello@example.com" required type="email" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-neutral-700">
            需求類型
            <select className="min-h-12 rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-neutral-950" name="type">
              <option>UZEEK U8 安裝諮詢</option>
              <option>豪宅智能鎖導入</option>
              <option>產品展示與合作</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-neutral-700">
            留言
            <textarea className="min-h-32 rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-950" name="message" placeholder="請描述門型、地區或希望導入的功能" />
          </label>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-neutral-950 px-5 font-semibold text-white hover:bg-neutral-800" type="submit">
            送出諮詢 <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Header />
      <main>
        <Hero />
        <Specs />
        <Features />
        <FaceSection />
        <PalmSection />
        <AppSection />
        <SilentLockSection />
        <Contact />
      </main>
      <footer className="bg-white">
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-6xl flex-col gap-2 border-t border-neutral-200 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-neutral-950">UZEEK U8</span>
          <span>Smart access for modern living.</span>
        </div>
      </footer>
    </div>
  );
}
