import Script from "next/script";

export function Analytics() {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      {plausible && <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" />}
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', '${ga}');
          `}</Script>
        </>
      )}
    </>
  );
}