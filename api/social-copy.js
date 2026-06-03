const productHighlights = [
  "3D人臉辨識",
  "掌靜脈",
  "手機APP",
  "靜音自動鎖體",
];

const toneMap = {
  高端: "高端精品住宅語氣，強調質感、安全與生活品味",
  科技感: "未來科技語氣，強調 AI、生物辨識與智慧生活",
  促銷: "明確促購語氣，強調預約、限時評估與行動誘因",
  專業: "專業顧問語氣，清楚解釋痛點、功能與適用場景",
  親切: "親切生活語氣，貼近家庭、長者與小孩的日常需求",
};

function cleanInput(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
}

function createHashtags(topic) {
  const compactTopic = topic.replace(/\s+/g, "");
  return [
    "#UZEEKU8",
    "#智能鎖",
    "#高端住宅",
    "#3D人臉辨識",
    "#掌靜脈",
    `#${compactTopic}`,
  ];
}

function createCopy(topic, tone) {
  const toneGuide = toneMap[tone] || toneMap["高端"];
  const hashtags = createHashtags(topic);
  const featureLine = productHighlights.join("、");
  const cta = "立即預約 UZEEK U8 智能鎖安裝評估，讓家的第一道門更安全、更安靜、更聰明。";

  return {
    topic,
    tone,
    toneGuide,
    generatedAt: new Date().toISOString(),
    productHighlights,
    hashtags,
    cta,
    copies: {
      LINE: [
        `【UZEEK U8 智能鎖】${topic}`,
        "",
        `如果你正在擔心「${topic}」，UZEEK U8 可以用更直覺的方式守護家門。`,
        `整合 ${featureLine}，不只解決開門問題，也讓長者、小孩與夜歸家人都能安心進出。`,
        "",
        cta,
      ].join("\n"),
      Facebook: [
        `${topic}，其實可以用更聰明的門鎖解決。`,
        "",
        "UZEEK U8 為高端住宅設計，把安全、便利與安靜體驗整合在同一把智能鎖裡。",
        "",
        `核心功能包含：${featureLine}。`,
        "不必只依賴鑰匙或密碼，也能用手機掌握家門狀態與開門紀錄。",
        "",
        cta,
        "",
        hashtags.slice(0, 5).join(" "),
      ].join("\n"),
      Instagram: [
        `家的安全感，從解決「${topic}」開始。`,
        "",
        "UZEEK U8 用俐落科技感設計，結合 3D人臉辨識、掌靜脈、手機APP 與靜音自動鎖體。",
        "進門更自然，夜歸更安靜，日常更安心。",
        "",
        "預約安裝評估，升級你的智慧住宅入口。",
        "",
        hashtags.join(" "),
      ].join("\n"),
      Threads: [
        `「${topic}」是很多家庭換智能鎖的原因。`,
        "",
        "UZEEK U8 把 3D人臉辨識、掌靜脈、手機APP、靜音自動鎖體整合在一起，讓家人不用記密碼、不怕指紋磨損，也能遠端掌握門鎖狀態。",
        "",
        "家門，應該更聰明，也更安靜。",
      ].join("\n"),
      TikTok: [
        "TikTok 短影音腳本｜30 秒",
        "",
        `0-3s｜畫面：夜晚回家或家人站在門口。字幕：還在擔心「${topic}」？`,
        "4-9s｜畫面：UZEEK U8 門鎖特寫。旁白：用 3D人臉辨識與掌靜脈，讓開門更直覺。",
        "10-16s｜畫面：手機 APP 顯示門鎖狀態。旁白：家人進出、訪客授權、異常提醒，都能即時掌握。",
        "17-23s｜畫面：深夜安靜上鎖。旁白：靜音自動鎖體，安全不打擾。",
        `24-30s｜畫面：品牌 Logo。字幕：${cta}`,
        "",
        hashtags.slice(0, 5).join(" "),
      ].join("\n"),
      YouTube: [
        "YouTube 影片企劃",
        "",
        `標題：${topic}怎麼解決？UZEEK U8 智能鎖實測給你看`,
        "",
        "描述：",
        `本集帶你了解 UZEEK U8 如何解決「${topic}」的居家安全痛點。透過 3D人臉辨識、掌靜脈、手機APP 與靜音自動鎖體，讓高端住宅入口更安全、更安靜、更智慧。`,
        "",
        "影片段落：",
        "00:00 開場痛點：為什麼傳統鑰匙與密碼不夠方便",
        "00:20 UZEEK U8 外觀與高端住宅情境",
        "00:45 3D人臉辨識與掌靜脈解鎖展示",
        "01:20 手機APP遠端控制與開門紀錄",
        "01:50 靜音自動鎖體與夜歸安全",
        "02:20 安裝諮詢 CTA",
        "",
        "Shorts 腳本：",
        `開頭 3 秒：你家也有「${topic}」的困擾嗎？`,
        "中段：展示 3D人臉辨識、掌靜脈與手機APP。",
        "結尾：UZEEK U8，讓家的第一道門更安全。",
        "",
        cta,
        "",
        hashtags.join(" "),
      ].join("\n"),
    },
  };
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      route: "/api/social-copy",
      example: {
        topic: "老人指紋磨損",
        tone: "高端",
      },
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const topic = cleanInput(req.body?.topic, "智能鎖居家安全");
  const tone = cleanInput(req.body?.tone, "高端");

  return res.status(200).json({
    ok: true,
    data: createCopy(topic, tone),
  });
}
