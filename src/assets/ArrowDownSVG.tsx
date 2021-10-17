interface IProps {
  color?: string;
  width?: string | number;
}

const ArrowDown: React.FC<IProps> = ({ color = '#F9F9F9', width = '1' }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 18 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L9 7L17 1" stroke={color} strokeWidth={String(width)} />
  </svg>
);

export default ArrowDown;
