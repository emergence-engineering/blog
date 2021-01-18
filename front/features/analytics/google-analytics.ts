function gtag() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line
  window.dataLayer.push(arguments);
}

export function initializeGA() {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag("js", new Date());
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag("config", "UA-153510239-1");
  }
}
