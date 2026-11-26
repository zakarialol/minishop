import type { JSX } from "react/jsx-runtime";
type shopTitle = {
  className: string;
  text: string;
};
export default function shopTitle({
  className = "",
  text = "",
}: shopTitle): JSX.Element {
  return <p className={className}>{text}</p>;
}
