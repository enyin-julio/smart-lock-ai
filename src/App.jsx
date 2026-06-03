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

const contact = {
  email: "julio@aih.tw",
  phone: "0932-006350",
  address: "台北市內湖區文德路210巷30弄50號",
};

const navItems = [
  ["首頁", "#home"],
  ["產品特色", "#features"],
  ["3D人臉", "#face"],
  ["掌靜脈", "#palm"],
  ["手機APP", "#app"],
  ["聯絡", "#contact"],
];

const features = [
  {
    icon: ScanFace,
    title: "3D人臉辨識",
    text: "以立體深度感測建立臉部輪廓，搭配活體檢測，降低照片、影片與面具攻擊風險。",
  },
  {
    icon: Hand,
    title: "掌靜脈識別",
    text: "讀取掌心靜脈特徵，非接觸、難複製，也適合指紋磨損或指紋較淺的使用者。",
  },
  {
    icon: AppWindow,
    title: "手機APP遠端控制",
    text: "查看門鎖狀態、建立訪客授權、接收開門紀錄、異常提醒與低電量通知。",
  },
  {
    icon: VolumeX,
    title: "靜音自動鎖體",
    text: "低噪音傳動與自動上鎖設計，夜間返家安靜不打擾，兼顧安全與居住質感。",
  },
];

const metrics = [
  ["0.3s", "快速辨識"],
  ["3D", "活體防偽"],
  ["24/7", "APP通知"],
  ["L5", "高安全等級"],
];

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
        <a className="flex items-center gap-3" href="#home" aria-label="UZEEK 首頁">
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
          href="#contact"
        >
          聯絡預約
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
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
            <ButtonLink href="#features" variant="secondary">
              查看產品特色
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
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/12 bg-white/6 p-4">
              <p className="text-xs text-slate-400">辨識速度</p>
              <p className="mt-1 text-2xl font-black text-white">0.3s</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/6 p-4">
              <p className="text-xs text-slate-400">防護等級</p>
              <p className="mt-1 text-2xl font-black text-white">L5</p>
            </div>
          </div>
        </div>
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
  );
}

function FaceSection() {
  return (
    <section id="face" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-10 py-16 lg:grid-cols-2">
      <div>
        <SectionLabel>3D Face Recognition</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          3D人臉辨識，確認真人才開門。
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          透過深度感測與活體檢測建立臉部立體輪廓，降低照片、影片與面具偽造風險，適合高端住宅的快速通行需求。
        </p>
        <ul className="mt-7 grid gap-3 text-slate-200">
          {["低光源環境仍可辨識", "適合家庭成員快速建檔", "異常嘗試即時通知"].map((item) => (
            <li className="flex gap-3" key={item}>
              <Check className="mt-1 shrink-0 text-aqua" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid min-h-[360px] place-items-center rounded-lg border border-neon/20 bg-panel/70 p-8 shadow-luxury">
        <ScanFace className="text-neon drop-shadow-[0_0_24px_rgba(36,216,255,0.45)]" size={190} strokeWidth={1.2} />
      </div>
    </section>
  );
}

function PalmSection() {
  return (
    <section id="palm" className="mx-auto grid w-[calc(100%-32px)] max-w-6xl items-center gap-10 py-16 lg:grid-cols-2">
      <div className="order-2 grid min-h-[360px] place-items-center rounded-lg border border-aqua/20 bg-panel/70 p-8 shadow-luxury lg:order-1">
        <Hand className="text-aqua drop-shadow-[0_0_24px_rgba(73,245,198,0.42)]" size={190} strokeWidth={1.2} />
      </div>
      <div className="order-1 lg:order-2">
        <SectionLabel>Palm Vein</SectionLabel>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          掌靜脈識別，讓身體成為鑰匙。
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          掌靜脈特徵位於皮膚下方，不易外露或複製。對長者、手指乾燥或指紋磨損者，也能提供穩定的解鎖方式。
        </p>
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
          手機APP遠端控制，門鎖狀態即時掌握。
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          透過手機 APP 查看門鎖狀態、建立訪客授權、接收開門紀錄、異常提醒與低電量通知，讓家庭成員進出更安心。
        </p>
      </div>
      <div className="mx-auto w-full max-w-[340px] rounded-[28px] border border-white/16 bg-space p-5 text-white shadow-luxury">
        <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-white/20" />
        <div className="rounded-lg border border-neon/24 bg-neon/8 p-5">
          <p className="text-sm text-slate-400">Front Door</p>
          <p className="mt-2 text-2xl font-black">已上鎖</p>
          <button className="mt-5 min-h-24 w-full rounded-lg bg-gradient-to-r from-neon to-aqua font-black text-space">
            遠端解鎖
          </button>
        </div>
        <div className="mt-4 grid gap-3">
          {["訪客授權已建立", "掌靜脈解鎖成功", "低電量提醒"].map((event) => (
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

function Contact() {
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
            <option>UZEEK 安裝諮詢</option>
            <option>高端住宅智能鎖導入</option>
            <option>產品展示與合作</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          留言
          <textarea className="min-h-32 rounded-lg border border-white/12 bg-space/76 px-4 py-3 text-white outline-none transition focus:border-neon focus:ring-4 focus:ring-neon/10" name="message" placeholder="請描述門型、地區或希望導入的功能" />
        </label>
        <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon to-aqua px-5 font-black text-space shadow-glow transition hover:scale-[1.01]" type="submit">
          聯絡預約 <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-space text-platinum">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <FaceSection />
        <PalmSection />
        <AppSection />
        <section className="mx-auto w-[calc(100%-32px)] max-w-6xl py-20">
          <div className="rounded-lg border border-aqua/20 bg-aqua/8 p-8 text-center shadow-glow">
            <VolumeX className="mx-auto mb-5 text-aqua" size={58} />
            <h2 className="text-3xl font-black text-white sm:text-5xl">
              靜音自動鎖體，安全不打擾。
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
              低噪音傳動與自動上鎖設計，讓深夜返家、長者休息與高端住宅環境都能保持安靜。
            </p>
          </div>
        </section>
        <Contact />
      </main>
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
