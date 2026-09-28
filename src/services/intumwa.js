const INTUMWA_API_URL = import.meta.env.VITE_INTUMWA_API_URL || "";

/**
 * @param {{ message: string, sessionId?: string, language?: string }} payload
 * @returns {Promise<{ reply: string, quickReplies?: { id: string, label: string }[], sessionId?: string }>}
 */
export async function sendIntumwaMessage(payload) {
  if (!INTUMWA_API_URL) {
    await delay(600);
    return mockIntumwaReply(payload.message);
  }

  const res = await fetch(`${INTUMWA_API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`INTUMWA request failed (${res.status})`);
  }

  return res.json();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function mockIntumwaReply(userText) {
  const text = (userText || "").toLowerCase();

  if (text.includes("complaint") || text.includes("ikirego")) {
    return {
      reply:
        "You can file a new complaint through our support team. For now this is a preview — INTUMWA will handle routing once connected.",
      quickReplies: [
        { id: "status", label: "Complaint status" },
        { id: "escalate", label: "Escalate complaint" },
      ],
    };
  }

  return {
    reply:
      "Thank you for your message. INTUMWA integration is coming soon — your message was received in the preview interface.",
    quickReplies: [
      { id: "products", label: "Products & loans" },
      { id: "membership", label: "Membership" },
      { id: "contact", label: "Contact center" },
    ],
  };
}

export function createChatSessionId() {
  return `ms-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
