
export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What is Sprunki Retake?
            </h2>
            <p className="text-gray-700">
              Sprunki Retake is the latest addition to the Sprunki game family,
              following the success of Sprunki Incredibox. Like the original
              Sprunki Incredibox mod, our version focuses on creating amazing
              music through an intuitive interface while adding new elements to
              enhance your music-making experience.
            </p>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 gap-4">
            <article className="p-6 bg-slate-300 rounded-lg mx-auto">
              <h3 className="mb-2 flex items-center space-x-2 font-bold">
                <svg
                  className="fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>The Evolution of Sprunki</span>
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Sprunki Incredibox: The original mod that started it all
                </li>
                <li>
                  Sprunki Incredibox mod: The version that gained worldwide
                  popularity
                </li>
                <li>
                  Sprunki Retake: The newest version of the beloved Sprunki game
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
