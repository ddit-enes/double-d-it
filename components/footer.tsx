import React from "react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer>
      <div className="container flex justify-between h-20 mx-auto px-6 md:px-10">
        <p className="flex justify-center items-center mx-auto">{`© ${year}. All Rights Reserved.`}</p>
      </div>
    </footer>
  );
}
