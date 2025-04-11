"use client";

import { AnimatedList } from "@/components/magicui/animated-list";
import { classNames } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}

let notifications = [
  {
    name: "Usuario de Google",
    description: "Excelente servicio y nivel de atencion, fui con un tema puntual y me asesoran con todo lo de la pileta. Se ganaron un cliente!",
    icon: "💬",
    color: "#00C9A7",
  },
  {
    name: "Usuario de Google",
    description: "Excelentes precios y muy buena atención/asesoramiento. Tiene lugar para estacionar y mucha variedad de productos! Cuentan con todo lo que necesitas para tu pileta y mas!",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Usuario de Google",
    description: "Muy buenos precios y variedad de productos. Tienen todo lo que se necesita para una pileta. Los super recomiendo!",
    icon: "💬",
    color: "#FF3D71",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={classNames(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg px-2">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
   

          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function ListClients({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className || ''
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
