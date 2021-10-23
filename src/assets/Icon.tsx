export enum iconEnum {
  Github,
  Heart,
  ArrowUpRight,
}

const icons = {
  [iconEnum.Github]: {
    path: (
      <>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </>
    ),
  },
  [iconEnum.Heart]: {
    path: (
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
    ),
  },
  [iconEnum.ArrowUpRight]: {
    path: (
      <path
        fillRule="evenodd"
        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
      />
    ),
  },
};

export interface IconProps {
  name: iconEnum;
  size?: string;
  fill?: string;
  fillOpacity?: number;
  focusable?: boolean;
  tabIndex?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = '100%',
  fill = 'currentColor',
  fillOpacity = 1,
  focusable,
  tabIndex,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fill}
    fillOpacity={fillOpacity}
    viewBox="0 0 16 16"
    {...{ focusable, tabIndex }}
  >
    {icons[name].path}
  </svg>
);

export default Icon;
