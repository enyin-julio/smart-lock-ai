import crypto from "node:crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const LINE_REPLY_URL = "https://api.line.me/v2/bot/message/reply";
const CONTACT_EMAIL = "julio@aih.tw";
const CONTACT_PHONE = "0932-006350";
const CONTACT_ADDRESS = "台北市內湖區文德路210巷30弄50號";

const BRAND_MENU_MESSAGE = [
  "UZEEK 高端智能電子鎖",
  "",
  "UZEEK 專為高端住宅、別墅與精品社區打造智慧入口系統，整合 3D 人臉辨識、掌靜脈、手機 APP 與靜音自動鎖體。",
  "",
  "你可以輸入：",
  "1. 價格 - 查看價格區間與預約安裝",
  "2. 功能 - 查看產品特色",
  "3. 老人 - 長者使用建議",
  "4. 小孩 - 兒童使用情境",
  "5. 預約 - 預約安裝諮詢",
].join("\n");

const PRICE_MESSAGE = [
  "UZEEK 智能鎖價格區間",
  "",
  "實際價格會依門型、安裝環境與功能配置調整，常見區間如下：",
  "",

  "高階生物辨識：約 NT$23,830 - NT$31,030",
  "豪宅整合方案：依現場與系統需求報價",
  "",
  "如果你想預約安裝評估，請輸入「預約」，並留下姓名、電話、地區。",
].join("\n");

const FEATURE_MESSAGE = [
  "UZEEK 產品功能",
  "",
  "1. 3D人臉辨識",
  "建立臉部立體輪廓，搭配活體檢測，降低照片、影片與面具攻擊風險。",
  "",
  "2. 掌靜脈",
  "讀取掌心靜脈特徵，非接觸、難複製，也適合指紋較不清楚的使用者。",
  "",
  "3. 手機APP",
  "支援遠端解鎖、訪客授權、開門紀錄、異常提醒與低電量通知。",
  "",
  "4. 靜音自動鎖體",
  "低噪音傳動與自動上鎖設計，夜間返家不打擾家人。",
].join("\n");

const PREORDER_PROMO_MESSAGE = [
  "【限期預購方案;2026/06/19之前】",
  "",
  "守護家庭升級計畫",
  "1. 購買1只鋰電池，可用100元加購1只鋰電池",
  "2. 安裝補助3,500元",
  "3. 購買1年全責保固，可用360元再加購1年全責保固。",
  "",
  "安心、便利換新計畫",
  "1. 舊的大型智能鎖換新，可折抵3,600元",
  "2. 購買1只鋰電池，可用100元加購1只鋰電池",
  "3. 安裝補助3,500元",
  "4. 購買1年全責保固，可用360元再加購1年全責保固。",
  "",
  "想了解 UZEEK U8 詳細功能，請輸入「功能」。",
  "想預約安裝評估，請輸入「預約」。",
].join("\n");
const SENIOR_MESSAGE = [
  "UZEEK 適合長者使用",
  "",
  "很適合指紋磨損、手指較乾或指紋較淺的長者。",
  "",
  "長者可使用 3D 人臉辨識或掌靜脈解鎖，不必反覆按指紋，也不需要記密碼。家人也能透過手機 APP 查看門鎖狀態與開門紀錄。",
].join("\n");

const CHILD_MESSAGE = [
  "UZEEK 適合小孩使用",
  "",
  "小孩不需要記密碼，也不用攜帶鑰匙。",
  "",
  "可透過 3D 人臉辨識、掌靜脈或家長手機 APP 授權進出，降低忘記密碼、弄丟鑰匙或被陌生人看見密碼的風險。",
].join("\n");

const BOOKING_MESSAGE = [
  "預約 UZEEK 安裝諮詢",
  "",
  "請直接回覆以下資料，我們會協助安排智能鎖評估：",
  "",
  "姓名：",
  "電話：",
  "地區：",
  "",
  `也可以直接聯絡：${CONTACT_EMAIL} / ${CONTACT_PHONE}`,
  CONTACT_ADDRESS,
].join("\n");

function sendJson(res, statusCode, data) {
  res.status(statusCode).json(data);
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(Buffer.from(chunk));
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", reject);
  });
}

function verifyLineSignature(rawBody, signature, channelSecret) {
  if (!signature || !channelSecret) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac("sha256", channelSecret)
    .update(rawBody)
    .digest("base64");

  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (signatureBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
}

function createReplyMessages(userText = "") {
  const normalizedText = userText.trim().toLowerCase();
  const promoKeywords = ["優惠", "3d", "人臉", "掌靜脈", "手機", "app", "靜音"];

  if (promoKeywords.some((keyword) => normalizedText.includes(keyword))) {
    return [{ type: "text", text: PREORDER_PROMO_MESSAGE }];
  }
  if (normalizedText.includes("價格") || normalizedText.includes("多少錢")) {
    return [{ type: "text", text: PRICE_MESSAGE }];
  }

  if (normalizedText.includes("功能") || normalizedText.includes("特色")) {
    return [{ type: "text", text: FEATURE_MESSAGE }];
  }

  if (
    normalizedText.includes("老人") ||
    normalizedText.includes("長者") ||
    normalizedText.includes("長輩")
  ) {
    return [{ type: "text", text: SENIOR_MESSAGE }];
  }

  if (
    normalizedText.includes("小孩") ||
    normalizedText.includes("兒童") ||
    normalizedText.includes("孩子")
  ) {
    return [{ type: "text", text: CHILD_MESSAGE }];
  }

  if (
    normalizedText.includes("預約") ||
    normalizedText.includes("安裝") ||
    normalizedText.includes("諮詢")
  ) {
    return [{ type: "text", text: BOOKING_MESSAGE }];
  }

  return [{ type: "text", text: BRAND_MENU_MESSAGE }];
}

async function replyToLine(replyToken, messages, channelAccessToken) {
  const response = await fetch(LINE_REPLY_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${channelAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      replyToken,
      messages,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LINE reply failed: ${response.status} ${errorText}`);
  }
}

export default async function handler(req, res) {
  const method = req.method || "GET";

  if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
    res.setHeader("Allow", "GET, HEAD, OPTIONS, POST");
    return sendJson(res, 200, {
      ok: true,
      route: "/api/line-webhook",
      service: "UZEEK LINE Bot webhook",
    });
  }

  if (method !== "POST") {
    res.setHeader("Allow", "GET, HEAD, OPTIONS, POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;

  if (!channelSecret || !channelAccessToken) {
    return sendJson(res, 500, {
      error: "Missing LINE_CHANNEL_SECRET or LINE_CHANNEL_ACCESS_TOKEN",
    });
  }

  const rawBody = await readRawBody(req);
  const signature = req.headers["x-line-signature"];

  if (!verifyLineSignature(rawBody, signature, channelSecret)) {
    return sendJson(res, 401, { error: "Invalid LINE signature" });
  }

  let body;

  try {
    body = JSON.parse(rawBody.toString("utf8"));
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON body" });
  }

  const events = Array.isArray(body.events) ? body.events : [];

  try {
    await Promise.all(
      events
        .filter((event) => event.type === "message" && event.replyToken)
        .map((event) => {
          const userText =
            event.message?.type === "text" ? event.message.text : "";

          return replyToLine(
            event.replyToken,
            createReplyMessages(userText),
            channelAccessToken,
          );
        }),
    );
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { error: "LINE reply failed" });
  }

  return sendJson(res, 200, {
    ok: true,
    route: "/api/line-webhook",
  });
}
