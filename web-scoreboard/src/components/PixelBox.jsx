export default function PixelBox({ className = '', children, ...rest }) {
  return (
    <div
      className={`rounded-none border-4 border-black bg-white
                  shadow-[6px_6px_0_0_#000000] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
