type navigation = {
  className: string;
  text: string;
};
export default function navBtn({ className = "", text = "" }: navigation) {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}
