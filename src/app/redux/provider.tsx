"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import { useState } from "react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
