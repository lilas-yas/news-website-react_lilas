"use client";

import { useEffect } from "react";

export default function AccountPage() {
  useEffect(() => {
    // Throw error ONLY when opening /account?sdk_error=1
    const params = new URLSearchParams(window.location.search);
    const shouldThrow = params.get("sdk_error") === "1";

    if (!shouldThrow) return;

    // Throw immediately so the SDK can catch it reliably
    throw new Error("SDK_TEST: runtime error on /account");
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Account Page</h1>
      <p>
        SDK test page. To trigger an error, open: <b>/account?sdk_error=1</b>
      </p>
    </div>
  );
}
