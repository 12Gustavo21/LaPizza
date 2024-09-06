// global style
import { GlobalStyle } from "./assets/global/style";

// lazy
import { lazy, Suspense } from "react";

// components
import Hero from "./assets/components/hero";
import About from "./assets/components/about";
const MoreSales = lazy(() => import("./assets/components/moreSales"));

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <MoreSales />
        </Suspense>
        <About />
      </main>
    </>
  )
}
