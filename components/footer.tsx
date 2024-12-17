import React from "react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer>
      <p className="text-center">{`© ${year}. All Rights Reserved.`}</p>
    </footer>
  );
}
