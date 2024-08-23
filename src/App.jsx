// global style
import { GlobalStyle } from "./assets/global/style";

// lazy
import { lazy, Suspense } from "react";

// components
const Hero = lazy(() => import("./assets/components/hero"));
const MoreSales = lazy(() => import("./assets/components/moreSales"));

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <MoreSales />
      </Suspense>
    </>
  )
}
