// utils/markRead.js
module.exports = async function safeMarkAsRead(api, threadID) {
  try {
    if (typeof api.markAsReadAll === "function") {
      await api.markAsReadAll(threadID);
    } else if (typeof api.markAsRead === "function") {
      await api.markAsRead(threadID);
    } else {
      console.log("[WARN] markAsRead function not available on API client");
    }
  } catch (err) {
    if (err?.error === 1357031 || (err.errorSummary && err.errorSummary.includes("no longer available"))) {
      // silent ignore
      console.log("⚠️ [INFO] markAsRead skipped (content unavailable or deleted).");
    } else {
      console.log("⚠️ [ERROR] markAsRead failed:", err.errorSummary || err.message || err);
    }
  }
};
