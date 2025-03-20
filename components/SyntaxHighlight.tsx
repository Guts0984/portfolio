"use client";

import Prism from "prismjs";
import React, { useEffect } from "react";
import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";

import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

function SyntaxHighlight({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div>{children}</div>;
}

export default SyntaxHighlight;
