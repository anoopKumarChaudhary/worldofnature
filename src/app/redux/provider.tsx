"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import { useState, useEffect } from "react";
import { checkAuth } from "./features/auth/authSlice";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => makeStore());

  useEffect(() => {
    store.dispatch(checkAuth());
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
