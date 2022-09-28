import * as React from "react";
import { SVGProps } from "react";

export const MeritTopFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={960}
    height={350}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path fill="#664AE3" fillOpacity={0.07} d="M80 102h800v168H80z" />
    </g>
    <mask id="b" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M110 0C87.909 0 70 17.909 70 40v168c0 22.091 17.909 40 40 40h336.151l22.249 37.503c3.874 6.53 13.326 6.53 17.2 0L507.849 248H850c22.091 0 40-17.909 40-40V40c0-22.091-17.909-40-40-40H110Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M110 0C87.909 0 70 17.909 70 40v168c0 22.091 17.909 40 40 40h336.151l22.249 37.503c3.874 6.53 13.326 6.53 17.2 0L507.849 248H850c22.091 0 40-17.909 40-40V40c0-22.091-17.909-40-40-40H110Z"
      fill="#fff"
    />
    <path
      d="m446.151 248 3.441-2.041-1.163-1.959h-2.278v4Zm22.249 37.503-3.441 2.04 3.441-2.04Zm17.2 0 3.441 2.04-3.441-2.04ZM507.849 248v-4h-2.278l-1.163 1.959 3.441 2.041ZM74 40c0-19.882 16.118-36 36-36v-8C85.7-4 66 15.7 66 40h8Zm0 168V40h-8v168h8Zm36 36c-19.882 0-36-16.118-36-36h-8c0 24.301 19.7 44 44 44v-8Zm336.151 0H110v8h336.151v-8Zm25.689 39.462-22.248-37.503-6.881 4.082 22.248 37.502 6.881-4.081Zm10.32 0c-2.324 3.918-7.996 3.918-10.32 0l-6.881 4.081c5.424 9.143 18.658 9.143 24.082 0l-6.881-4.081Zm22.248-37.503-22.248 37.503 6.881 4.081 22.248-37.502-6.881-4.082ZM850 244H507.849v8H850v-8Zm36-36c0 19.882-16.118 36-36 36v8c24.301 0 44-19.699 44-44h-8Zm0-168v168h8V40h-8ZM850 4c19.882 0 36 16.118 36 36h8c0-24.3-19.699-44-44-44v8ZM110 4h740v-8H110v8Z"
      fill="#EFF0F0"
      mask="url(#b)"
    />
    <path
      d="M176.436 78.94v8.7h8.4v-8.76h-3.84c0-1.56.28-2.82.84-3.78.56-.96 1.6-1.72 3.12-2.28v-3.96c-1.24.16-2.4.54-3.48 1.14-1.04.6-1.96 1.36-2.76 2.28-.76.88-1.34 1.9-1.74 3.06-.4 1.12-.58 2.32-.54 3.6Zm11.88 0v8.7h8.4v-8.76h-3.84c0-1.56.28-2.82.84-3.78.56-.96 1.6-1.72 3.12-2.28v-3.96c-1.24.16-2.4.54-3.48 1.14-1.08.6-2 1.36-2.76 2.28-.76.88-1.34 1.9-1.74 3.06-.4 1.12-.58 2.32-.54 3.6ZM776.346 77.5v-8.7h-8.4v8.76h3.84c0 1.52-.3 2.78-.9 3.78-.56.96-1.58 1.72-3.06 2.28v3.96c1.28-.2 2.44-.58 3.48-1.14 1.08-.6 2-1.34 2.76-2.22.76-.88 1.34-1.88 1.74-3 .44-1.16.62-2.4.54-3.72Zm-11.88 0v-8.7h-8.4v8.76h3.84c0 1.52-.3 2.78-.9 3.78-.56.96-1.58 1.72-3.06 2.28v3.96c1.28-.2 2.44-.58 3.48-1.14 1.08-.6 2-1.34 2.76-2.22.76-.92 1.34-1.94 1.74-3.06.44-1.16.62-2.38.54-3.66Z"
      fill="#664AE3"
    />
    <defs>
      <filter
        id="a"
        x={0}
        y={22}
        width={960}
        height={328}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={40}
          result="effect1_foregroundBlur_3671_1827"
        />
      </filter>
    </defs>
  </svg>
);
