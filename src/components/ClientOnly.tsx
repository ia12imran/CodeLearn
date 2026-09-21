"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({
  fallback,
  children,
}: {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial flip after hydration to render client-only children
    setMounted(true);
  }, []);

  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}