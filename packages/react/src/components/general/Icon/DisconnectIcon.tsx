import React from "react";

interface ISendIconProps {
  fillColor?: string;
}

const DisconnectIcon: React.FC<ISendIconProps> = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 2H6.64C5.37915 2 4.5328 2.00141 3.88348 2.05968C3.25446 2.11613 2.95749 2.21655 2.76135 2.32842C2.37245 2.55025 2.05025 2.87245 1.82842 3.26135C1.71655 3.45749 1.61613 3.75446 1.55968 4.38348C1.50141 5.0328 1.5 5.87915 1.5 7.14V7.86C1.5 9.12085 1.50141 9.9672 1.55968 10.6165C1.61613 11.2455 1.71655 11.5425 1.82842 11.7386C2.05025 12.1276 2.37245 12.4498 2.76135 12.6716C2.95749 12.7835 3.25446 12.8839 3.88348 12.9403C4.5328 12.9986 5.37915 13 6.64 13H9.25C9.66421 13 10 13.3358 10 13.75C10 14.1642 9.66421 14.5 9.25 14.5H6.64C4.17295 14.5 2.93942 14.5 2.01817 13.9745C1.39592 13.6196 0.880399 13.1041 0.525474 12.4818C0 11.5606 0 10.3271 0 7.86V7.14C0 4.67295 0 3.43942 0.525474 2.51817C0.880399 1.89592 1.39592 1.3804 2.01817 1.02547C2.93942 0.5 4.17295 0.5 6.64 0.5H9.25C9.66421 0.5 10 0.835786 10 1.25C10 1.66421 9.66421 2 9.25 2Z"
        fill="currentcolor"
      />
      <path
        d="M10.4697 11.5303C10.1768 11.2374 10.1768 10.7626 10.4697 10.4697L12.2626 8.67678C12.4201 8.51929 12.3085 8.25 12.0858 8.25H7.75002C7.3358 8.25 7.00002 7.91421 7.00002 7.5C7.00002 7.08579 7.3358 6.75 7.75002 6.75H12.0858C12.3086 6.75 12.4201 6.48071 12.2626 6.32322L10.4697 4.53033C10.1768 4.23744 10.1768 3.76256 10.4697 3.46967C10.7626 3.17678 11.2375 3.17678 11.5304 3.46967L14.8536 6.79289C15.2441 7.18342 15.2441 7.81658 14.8536 8.20711L11.5304 11.5303C11.2375 11.8232 10.7626 11.8232 10.4697 11.5303Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default DisconnectIcon;
