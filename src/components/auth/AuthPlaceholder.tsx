import React from "react";
import { MetricProps } from "../../types/auth";

const AuthPlaceholder: React.FC = () => {
  const metrics: MetricProps[] = [
    {
      heading: "30+",
      subheading: "Languages Support",
    },
    {
      heading: "10K+",
      subheading: "Developers",
    },
    {
      heading: "100K+",
      subheading: "Hours Saved",
    },
  ];

  return (
    <div className="bg-white h-screen w-[50vw] md:flex items-center justify-center relative hidden">
      <img
        src="/authPlaceholder.svg"
        className="absolute bottom-0 left-0 min-w-[140px]"
        alt="placeholder"
      />
      <div className="relative min-w-[50%] px-5">
        <section className="shadow py-2 rounded-[24px]">
          {/* Content remains the same, now type-safe */}
          {metrics.map((metric, index) => (
            <div className="flex flex-col items-center" key={index}>
              <h2 className="font-bold">{metric.heading}</h2>
              <p className="text-sm">{metric.subheading}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AuthPlaceholder;
