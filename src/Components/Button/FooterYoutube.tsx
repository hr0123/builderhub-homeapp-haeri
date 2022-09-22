import * as React from "react";
import { SVGProps } from "react";

export const FooterYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={58}
    height={58}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={29} cy={29} r={29} fill="#513BB5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.865 20.974A4.865 4.865 0 0 0 15 25.838v7.879a4.865 4.865 0 0 0 4.865 4.864H38.81a4.865 4.865 0 0 0 4.864-4.864v-7.879a4.865 4.865 0 0 0-4.864-4.864H19.865ZM33.194 31.18a1.622 1.622 0 0 0 0-2.808l-4.568-2.638a1.622 1.622 0 0 0-2.433 1.405v5.274a1.622 1.622 0 0 0 2.433 1.405l4.568-2.638Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h58v58H0z" />
      </clipPath>
    </defs>
  </svg>
);
