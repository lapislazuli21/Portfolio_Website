export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const GithubIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

const MainLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1200}
    height={1200}
    viewBox="0 0 1000 1000"
    {...props}
  >
    <title>{"logo"}</title>
    <path
      d="M329.5 70.2c-2.3.5-4.9 1.9-5.9 3.1-1.4 1.8-1.6 3.3-1.1 7.7.4 3 1.5 8.9 2.6 13 1.2 4.5 5.5 14.1 10.6 24 4.7 9.1 8.9 16.9 9.3 17.5.3.6 1.9 3.9 3.3 7.5 1.5 3.6 2.9 7.2 3 8 .1.8.7 2.2 1.2 3 .4.8 1.7 4.4 2.7 8 1 3.6 2.7 10.3 3.8 15 1.1 4.7 2.2 9.8 2.5 11.5.3 1.7 1.2 7.3 2 12.5s1.9 14.4 2.4 20.5 1 11.7 1.1 12.5c.1.8.4 15.4.6 32.5.3 17.5.1 39-.5 49.5-.6 10.2-1.8 27.7-2.7 39-.9 11.3-1.9 21.2-2.2 22-.3.8-.4 1.9-.3 2.5.1.6-.8 9.8-1.9 20.5-1.1 10.7-2.3 21.1-2.5 23-.3 1.9-1.4 11.1-2.5 20.5-1 9.4-3.1 26.9-4.5 39-1.5 12.1-3.7 31.5-5 43-1.6 13.6-4 28.1-6.9 41-2.5 11-6.2 25.9-8.1 33-2 7.1-5.2 18.2-7.2 24.5-2 6.3-5.6 16.9-8 23.5-2.5 6.6-6.5 16.7-9 22.5-2.5 5.8-7 15.5-10 21.5s-7.6 14.6-10.1 19-7.3 12-10.6 17-9.3 13.5-13.4 19c-4.2 5.5-11.3 14.3-15.8 19.5-4.5 5.2-13.8 14.9-20.6 21.5-6.8 6.6-15 14.4-18.1 17.2-3.1 2.9-6.1 5.3-6.7 5.3-.6 0-1 .3-1 .7.1.5-6.1 5.8-13.7 11.9-7.6 6.1-16 12.6-18.8 14.5-2.7 1.9-5.4 3.9-6 4.5-.6.6-4.4 3.6-8.5 6.6-4.1 3-10.9 7.9-15 10.8-4.1 3-19.9 13.9-35 24.2-15.1 10.4-31.9 21.9-37.3 25.6-5.4 3.7-14.6 10.1-20.4 14.2-5.9 4.1-11.1 8.6-11.7 9.8-.9 1.8-.7 3 .4 5 .9 1.5 3.4 3.7 5.5 4.9 2.2 1.3 6.1 2.6 8.7 3 2.6.5 4.5 1 4.3 1.3-.2.3 3.1.2 7.3-.1 4.3-.4 10.4-1.4 13.7-2.4 3.3-.9 7.8-2.1 10-2.7 2.2-.6 4.7-1.1 5.5-1.2.8-.1 2-.5 2.5-.8.5-.3 6.8-2.2 14-4.3 7.2-2 19.5-5.7 27.5-8.2 8-2.5 14.9-4.6 15.5-4.8.6-.1 2.3-.8 4-1.4 1.7-.7 4.6-1.9 6.5-2.6 1.9-.7 6.9-2.7 11-4.5 4.1-1.8 11.1-5 15.5-7.2s10.5-5.4 13.5-7c3-1.7 9.8-5.8 15-9.2 5.2-3.4 12.7-8.6 16.5-11.6 3.8-3 11.7-9.5 17.5-14.5 5.7-4.9 15.9-14.6 22.7-21.5 6.7-6.9 16.2-17.3 21-23.1 4.8-5.8 10-12.1 11.5-14 1.5-1.9 6.3-8.6 10.7-14.9 4.3-6.3 11.7-17.8 16.3-25.5 4.7-7.7 11.9-20.8 16-29 4.2-8.3 10.1-20.9 13.3-28 3.2-7.1 8.7-20.6 12.2-30 3.6-9.4 8.7-23.8 11.4-32 2.8-8.3 6.6-20.4 8.6-27 1.9-6.6 3.9-13.4 4.4-15 .4-1.6 3.3-12.2 6.3-23.5 3.1-11.3 5.6-21.2 5.6-22 0-1 1-.5 2.9 1.5 1.6 1.6 2.7 3.3 2.5 3.7-.2.5-.1.8.4.8.4 0 4.8 5 9.8 11.2 5 6.2 11.5 14.4 14.5 18.3 2.9 3.9 10 13.4 15.8 21.1 5.8 7.8 13.5 18.3 17.1 23.3 3.6 5.1 8.5 12 11 15.4 2.4 3.4 13 19.1 23.5 34.9 10.4 15.7 21.5 32.6 24.6 37.5 3.1 4.8 11.3 17.7 18.3 28.5 6.9 10.9 12.6 20.3 12.6 20.8s.3 1.1.7 1.2c.5.2 4.7 6.2 9.5 13.3 4.7 7.1 12.5 18.4 17.2 25 4.7 6.6 9.1 12.8 9.8 13.9.7 1 1.8 2.4 2.3 3 .6.6 3.8 4.4 7 8.5 3.3 4 6.7 8.3 7.5 9.4.8 1.1 3.6 4.3 6.3 7.1 2.6 2.8 6.2 6.9 7.9 9.1 1.8 2.2 10 10.4 18.3 18.2 8.2 7.8 17 15.9 19.5 18 2.5 2.1 6.1 5 8 6.5 1.9 1.5 7.8 6 13 10.1s12 9.1 15 11.1c3 2.1 7.7 4.4 10.5 5.1 2.7.8 9 1.9 14 2.5 5 .5 16.9 1.1 26.5 1.3 9.6.3 28.3.1 41.5-.4 13.2-.4 28.3-1 33.5-1.4 5.2-.3 14.9-.8 21.5-1 6.6-.3 13.8-.7 16-1 2.2-.2 25.6-1.6 52-3.1 26.4-1.4 49-3 50.3-3.5 1.7-.7 2.2-1.7 2.2-4.4 0-1.9-.6-4.7-1.4-6.3-.8-1.5-2.6-3.7-4-5-1.4-1.2-2.8-2.2-3.1-2.2-.3 0-3.8-1.4-7.8-3.1-3.9-1.7-9-3.9-11.2-4.9-2.2-1-8.7-3.8-14.5-6.3-5.8-2.5-12.8-5.5-15.5-6.8-2.8-1.2-5.5-2.3-6-2.5-.5-.1-8-3.2-16.5-6.9s-18-7.8-21-9.2c-3-1.4-8.9-4-13-5.8-4.1-1.8-14.5-6.5-23-10.5-8.5-3.9-18.6-8.5-22.5-10.3-3.9-1.7-21.6-10.4-39.5-19.3s-36.9-18.7-42.3-21.8c-5.3-3.1-10.2-5.6-10.7-5.6s-1.3-.6-1.8-1.4c-.4-.8-1-1.5-1.5-1.5-.4-.1-3.1-1.3-6-2.8-2.8-1.4-7.6-4.1-10.5-6-2.8-1.8-5.4-3.3-5.7-3.3-.3 0-9.7-5.9-21-13s-28.5-18.7-38.3-25.7c-9.7-7-20.3-14.7-23.6-17.2-3.2-2.5-11.3-9.1-18-14.5-6.6-5.5-17.7-15-24.6-21.2-6.9-6.1-20.6-19.5-30.5-29.5-9.9-10.1-22.6-23.6-28.1-29.9-5.5-6.3-13.6-16-18-21.5s-11.4-14.5-15.5-20c-4.2-5.5-10.8-14.5-14.7-20-3.9-5.5-10.5-15.2-14.6-21.5-4.1-6.3-11.1-17.4-15.4-24.5-4.3-7.1-8.2-13.7-8.5-14.5-.4-.8-1.4-2.5-2.2-3.8-1.4-2-1.3-2.3.2-2.8 1-.4 7.9-3 15.3-5.9 7.4-2.9 17.8-7.2 23-9.5 5.2-2.3 12.6-5.6 16.5-7.3 3.9-1.8 14.4-6.8 23.5-11.3 9.1-4.4 18.7-8.9 21.3-10 2.6-1 4.8-2.2 4.7-2.7 0-.4.5-.5 1-.2s2.1-.1 3.5-.8c1.3-.6 2.2-1.5 2-2-.3-.4 4.6-3.4 10.7-6.7 6.2-3.3 13.1-7.1 15.3-8.5 2.2-1.3 6.7-3.8 10-5.6 3.3-1.8 11.2-6.4 17.5-10.4 6.3-4 13.7-8.7 16.5-10.5 2.7-1.8 7.7-5.1 11-7.3s6.1-4.4 6.2-4.9c.2-.4.8-.8 1.3-.8s6.3-4 12.7-8.9c6.5-4.9 14.7-11.6 18.2-14.8 3.5-3.2 7.1-7.2 7.9-8.8.8-1.6 1.5-5.5 1.5-8.5 0-3.8-.8-7.2-2.6-11-1.4-3-5.2-8.9-8.4-12.9-3.2-4.1-9.4-10.6-13.8-14.4-4.4-3.8-9.7-7.9-11.7-9.1-2.1-1.1-3.8-2.7-3.8-3.4 0-.6-.4-1.1-.8-1-.4.2-2.6-.6-4.8-1.7-2.1-1.1-4.1-2.3-4.4-2.7-.3-.4-5.2-2.9-11-5.6-5.8-2.7-13.4-5.9-17-7.1-3.6-1.1-8.3-2.3-10.5-2.7-2.2-.3-5.6-.8-7.5-1.1l-3.5-.5c-2.9 17.6-4.4 24.5-5.1 26.7-.8 2.2-1.6 4.9-1.8 6-.1 1.1-.6 2.9-1.1 4-.4 1.1-2.5 6.1-4.6 11-2.2 4.9-6.6 13.7-10 19.5-3.3 5.8-8.8 14.3-12.2 19-3.3 4.7-9.6 12.8-13.8 18-4.2 5.2-10.4 12.6-13.8 16.5-3.4 3.9-12.6 13.7-20.4 22-7.8 8.2-23.6 24.1-35.2 35.3-11.6 11.1-21.1 20.1-21.3 20-.1-.2.9-14.2 2.3-31.3 1.3-17.1 3.8-46.8 5.5-66 1.6-19.3 3.7-42.2 4.5-51 .8-8.8 2.4-25.4 3.5-37 1.1-11.6 2-22.7 2-24.8 0-2 .3-3.7.7-3.7.5 0 .7-1.5.5-3.3-.1-1.7 1.6-20.1 3.7-40.7 2.2-20.6 4.2-40.7 4.5-44.5.4-3.8 1.3-12.4 2.1-19s1.5-12.7 1.6-13.5c0-.8.8-8.7 1.6-17.5 1.4-13.3 1.4-16.5.3-19-.7-1.7-3.6-4.5-6.9-6.7-3.1-2-10.1-5.9-15.6-8.6-5.5-2.8-16.1-7.3-23.5-10-7.4-2.8-18.4-6.5-24.5-8.3-6.1-1.7-16.2-4.2-22.5-5.6-6.3-1.3-15.1-2.6-19.5-2.7-4.4-.2-9.8.1-12 .6z"
      style={{
        fill: "currentcolor",
      }}
    />
  </svg>
)
export default MainLogo
