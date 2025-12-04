import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} T&S Events. All rights reserved.
      </div>
    </footer>
  );
}
