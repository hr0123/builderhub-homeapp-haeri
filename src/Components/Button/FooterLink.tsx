import * as React from "react";
import { SVGProps } from "react";

export const FooterLink = (props: SVGProps<SVGSVGElement>) => (
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
        d="M31.067 35.38a7.79 7.79 0 0 1-3.698-.764.44.44 0 0 0-.487.068l-2.379 2.209c-1.194 1.109-3.14 1.169-4.361.086-1.259-1.115-1.277-2.973-.053-4.11l5.115-4.75c1.206-1.12 3.168-1.12 4.374 0 .822.764 2.153.764 2.975 0 .821-.763.821-1.999 0-2.762-2.847-2.643-7.478-2.643-10.324 0l-5.05 4.69c-2.84 2.638-2.93 6.935-.115 9.6 2.841 2.69 7.51 2.705 10.374.047l3.937-3.657c.267-.247.069-.672-.308-.657Z"
        fill="#fff"
      />
      <path
        d="M26.89 21.971a7.79 7.79 0 0 1 3.7.764.44.44 0 0 0 .486-.068l2.378-2.209c1.195-1.109 3.14-1.169 4.362-.086 1.259 1.114 1.277 2.973.053 4.11l-5.115 4.75c-1.206 1.12-3.168 1.12-4.374 0-.822-.764-2.153-.764-2.975 0-.821.762-.821 1.999 0 2.762 2.847 2.643 7.478 2.643 10.324 0l5.049-4.689c2.842-2.638 2.93-6.935.116-9.6-2.841-2.69-7.51-2.706-10.374-.047l-3.937 3.656c-.267.248-.069.672.308.657Z"
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
