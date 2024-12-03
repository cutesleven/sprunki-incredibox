"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
// import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Note: Sprunki Retake is a fan-created version based on Sprunki
            Incredibox, made with love by fans of the original Sprunki
            Incredibox mod.
          </p>
          <p>
            &copy; Sprunki Retake (sprunkiretake.net) - All rights reserved.
          </p>
        </div>
      </footer>
      {/* <Footer border={true} /> */}
    </>
  );
}
