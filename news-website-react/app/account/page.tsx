"use client";

export default function AccountPage() {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const shouldThrow = params.get("sdk_error") === "1";

    if (shouldThrow) {
      // throws during render -> guaranteed to hit window error in prod
      throw new Error("SDK_TEST: runtime error on /account");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Account Page</h1>
      <p>
        SDK test page. To trigger an error, open: <b>/account?sdk_error=1</b>
      </p>
    </div>
  );
}
