import * as React from "react";
import { SVGProps } from "react";

export const FooterChang = (props: SVGProps<SVGSVGElement>) => (
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
        d="M35.614 35.128h-4.071V15l4.07 4.026v16.102ZM26.125 35.128h4.07v-17.16l-4.07 4.026v13.134ZM40.832 35.128h-4.07V23.044l4.07 4.026v8.058ZM21.014 35.117V27.78l-3.682-2.079V37.22l10.004 5.716v-4.207l-6.322-3.612ZM24.462 24.812v-4.207L18.16 24.29l3.693 2.085 2.61-1.562ZM39.584 36.842h-7.172L28.985 38.8V43l10.6-6.16Z"
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
