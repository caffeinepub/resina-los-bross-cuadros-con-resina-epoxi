import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080502",
        borderTop: "1px solid rgba(200,146,42,0.18)",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-center">
            <h3
              className="font-bold text-lg mb-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #e8b84b, #f5d07a, #c8922a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resina Los Bross
            </h3>
            <p className="text-xs" style={{ color: "rgba(200,170,100,0.55)" }}>
              Arte en Resina Epoxi · Córdoba Capital, Argentina
            </p>
          </div>

          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: "rgba(180,150,90,0.5)" }}
          >
            <span>Hecho con</span>
            <Heart
              className="h-3 w-3"
              style={{ color: "#c8922a", fill: "#c8922a" }}
            />
            <span>en Córdoba · Powered by</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors"
              style={{ color: "rgba(200,170,100,0.65)" }}
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
