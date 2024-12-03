import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <Features />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            How to Play Sprunki Retake
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              If you're familiar with Sprunki Incredibox, you'll feel right at
              home with Sprunki Retake. <br />
              For newcomers:
            </p>
            <div className="bg-slate-300 p-6 rounded-lg shadow-md space-y-4">
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Choose Your Sounds: Select from our expanded Sprunki game
                  sound collection
                </li>
                <li>
                  Drag and Drop: Place sounds on characters just like in Sprunki
                  Incredibox
                </li>
                <li>
                  Mix and Match: Create unique combinations in true Sprunki game
                  style
                </li>
                <li>Share: Record and share your Sprunki Retake creations</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sound Library
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                New in Sprunki Retake
              </h3>
              <ul className="space-y-2">
                <li>Fresh beats inspired by Sprunki Incredibox</li>
                <li>Additional melodies unique to Sprunki Retake</li>
                <li>New vocal elements for the Sprunki game experience</li>
                <li>Extra effects to enhance your mixes</li>
              </ul>
            </div>

            <div className="bg-slate-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Fan Favorites</h3>
              <ul className="space-y-2">
                <li>Classic Sprunki Incredibox mod beats</li>
                <li>Popular melodies from the original Sprunki game</li>
                <li>Beloved effects that made Sprunki Incredibox great</li>
                <li>Signature sounds from the Sprunki series</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Community Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-300 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold mb-4">Share Your Mixes</h3>
              <ul className="space-y-2">
                <li>Record your Sprunki Retake creations</li>
                <li>Share with other Sprunki Incredibox fans</li>
                <li>Get feedback from the Sprunki game community</li>
                <li>Discover new combinations</li>
              </ul>
            </div>

            <div className="bg-slate-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Connect with Fans</h3>
              <ul className="space-y-2">
                <li>Join Sprunki Retake discussions</li>
                <li>Share Sprunki Incredibox tips and tricks</li>
                <li>Participate in Sprunki game challenges</li>
                <li>Collaborate with fellow creators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                What is Sprunki Retake?
              </h3>
              <p className="text-gray-700">
                Sprunki Retake is the newest version based on Sprunki
                Incredibox, offering fresh sounds and features for music mixing
                enthusiasts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                How is it different from Sprunki Incredibox?
              </h3>
              <p className="text-gray-700">
                While maintaining the core gameplay of Sprunki Incredibox mod,
                Sprunki Retake adds new sounds, characters, and mixing
                possibilities to the Sprunki game experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Is Sprunki Retake free to play?
              </h3>
              <p className="text-gray-700">
                Yes! Like Sprunki Incredibox, Sprunki Retake is free to play in
                your web browser.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Do I need musical experience to play Sprunki Retake?
              </h3>
              <p className="text-gray-700">
                Not at all! If you can enjoy Sprunki Incredibox, you'll love
                creating with Sprunki Retake.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Need Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Need Help?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li>Check our Sprunki game FAQ</li>
                <li>Join our Sprunki Retake Discord</li>
                <li>Ask the Sprunki Incredibox community</li>
                <li>Watch Sprunki Retake tutorials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
