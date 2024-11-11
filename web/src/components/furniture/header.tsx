import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
    <header>
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D2MW5NBL5Z"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'G-D2MW5NBL5Z');
      </script>
    </header>
    </>
  );
});
