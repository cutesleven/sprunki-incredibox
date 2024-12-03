import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02-overlay-01.png";
import FeatureImg02 from "@/public/images/features-02-overlay-02.png";
import FeatureImg03 from "@/public/images/features-02-overlay-03.png";

export default function FeaturesHome() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-4">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-24 text-center md:pb-28">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Features in Sprunki Retake
            </h2>
            <p className="text-lg text-gray-700">
              Building on the foundation of Sprunki Incredibox, Sprunki Retake
              offers exciting new features
            </p>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden border-y  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1] lg:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-gray-200 [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-bold">
                <svg
                  className="fill-slate-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                </svg>
                <span>New Elements</span>
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Fresh Sounds: New beats and melodies added to the Sprunki game
                  collection
                </li>
                <li>
                  Additional Characters: New faces join the Sprunki Incredibox
                  family
                </li>
                <li>
                  Extra Effects: More ways to enhance your Sprunki Retake mixes
                </li>
                <li>
                  New Animations: Fresh visual elements in the style of Sprunki
                  Incredibox
                </li>
              </ul>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-bold">
                <svg
                  className="fill-slate-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={12}
                >
                  <path d="M2 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3Z" />
                </svg>
                <span>Classic Features</span>
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Simple Controls: The same intuitive interface from Sprunki
                  Incredibox mod
                </li>
                <li>
                  Real-time Mixing: Create music on the fly in true Sprunki game
                  style
                </li>
                <li>
                  Easy Recording: Save and share your Sprunki Retake creations
                </li>
                <li>
                  Community Sharing: Connect with other Sprunki Incredibox fans
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
