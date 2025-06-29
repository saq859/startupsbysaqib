import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="relative rounded-xl p-8 flex flex-col gap-4 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        >
          {/* Purple accent only in top-left and bottom-right corners */}
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top left, #a855f733 30%, transparent 70%), " +
                "radial-gradient(circle at bottom right, #a855f733 30%, transparent 70%)"
            }}
          />
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;