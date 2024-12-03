"use client";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="mb-6 border-y text-2xl font-bold md:text-6xl "
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Sprunki Retake – Experience the New Version of Sprunki Game
            </h1>
            <div className="mx-auto max-w-3xl hidden md:block">
              <p
                className="mb-8 tex-base md:text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Welcome to <b>Sprunki Retake</b> (sprunkiremake.net), an
                exciting new version inspired by the popular{" "}
                <b>Sprunki Incredibox</b>. Building upon the success of the
                original <b>Sprunki Incredibox</b> mod, <b>Sprunki Retake</b>{" "}
                brings fresh sounds and creative possibilities to the beloved{" "}
                <b>Sprunki game</b> experience that fans worldwide have come to
                love.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="relative">
              <iframe
                src="/iframe.html"
                allowTransparency={true}
                className="w-full aspect-video rounded-2xl"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => {
                  const iframe = document.querySelector("iframe");
                  if (iframe) {
                    iframe.requestFullscreen();
                  }
                }}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-lg transition-colors"
              >
                Full Screen
              </button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              <span className="font-bold">Warning:</span> This game may contain
              violence, suggestive themes, crude humor, blood, and other
              material not suitable for users under 13 years old. Our rating
              system ensures that content is suitable for different age groups.
              Please play responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
