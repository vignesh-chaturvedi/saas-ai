"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3d8ccbea-3a23-4220-8856-ffd2fef49a7d");
  }, []);

  return null;
};
