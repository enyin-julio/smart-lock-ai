import crypto from "node:crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const LINE_REPLY_URL = "https://api.line.me/v2/bot/message/reply";

const INTRO_MESSAGE = [
  "NOVA LOCK AI 智能電子鎖",
  "",
  "為高端住宅、別墅與精品社區打造的 AI 智慧入口系統，整合生物辨識、遠端管理與靜音自動鎖體，讓門鎖成為居家安全的第一道智能防線。",
].join("\n");

const FEATURE_MESSAGE = [
  "產品特色",
  "",
  "1. 3D人臉辨識",
  "透過立體深度感測與活體檢測，提升辨識速度與防偽能力。",
  "",
  "2. 掌靜脈",
  "讀取掌心靜脈特徵，非接觸式辨識，更安全也更衛生。",
  "",
  "3. 手機APP",
  "支援遠端解鎖、訪客授權、開門紀錄與異常通知。",
  "",
  "4. 靜音自動鎖體",
  "低噪音馬達與自動上鎖設計，深夜返家不打擾。",
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

  if (normalizedText.includes("特色") || normalizedText.includes("功能")) {
    return [{ type: "text", text: FEATURE_MESSAGE }];
  }

  if (
    normalizedText.includes("app") ||
    normalizedText.includes("手機") ||
    normalizedText.includes("遠端")
  ) {
    return [
      {
        type: "text",
        text: "手機 APP 可遠端查看門鎖狀態、建立訪客授權、接收解鎖紀錄與異常通知，適合家庭成員、管家與物業管理情境。",
      },
    ];
  }

  if (normalizedText.includes("3d") || normalizedText.includes("人臉")) {
    return [
      {
        type: "text",
        text: "3D 人臉辨識會建立臉部立體輪廓，搭配活體檢測降低照片、影片與面具攻擊風險，適合高端住宅入口。",
      },
    ];
  }

  if (normalizedText.includes("掌") || normalizedText.includes("靜脈")) {
    return [
      {
        type: "text",
        text: "掌靜脈識別讀取皮膚下方的靜脈特徵，非接觸、難複製，也能降低指紋磨損或濕手造成的辨識問題。",
      },
    ];
  }

  if (normalizedText.includes("靜音") || normalizedText.includes("自動鎖")) {
    return [
      {
        type: "text",
        text: "靜音自動鎖體採低噪音傳動與自動上鎖設計，兼顧夜間使用、居住品質與入口安全。",
      },
    ];
  }

  return [
    { type: "text", text: INTRO_MESSAGE },
    { type: "text", text: FEATURE_MESSAGE },
  ];
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
      service: "NOVA LOCK AI LINE Bot webhook",
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
