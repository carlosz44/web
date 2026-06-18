import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const innerClass =
  "relative transform rounded-md border-2 border-violet-400 bg-stone-800 px-4 py-2 text-white shadow-lg transition duration-300 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-xl focus:ring focus:ring-white focus:ring-inset active:translate-x-0.5 active:translate-y-0.5";

type AnchorProps = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = { href?: never } & ButtonHTMLAttributes<HTMLButtonElement>;
type Props = (AnchorProps | ButtonProps) & {
  children: ReactNode;
  className?: string;
};

export default function OffsetButton({
  children,
  className = "",
  ...props
}: Props) {
  const cls = `${innerClass} ${className}`;

  return (
    <span className="relative inline-flex w-fit text-base leading-6 font-medium">
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 transform rounded-md border-2 border-emerald-400 bg-linear-to-r from-violet-400 to-emerald-400 shadow-lg" />
      {"href" in props && props.href !== undefined ? (
        <a className={cls} {...(props as AnchorProps)}>
          {children}
        </a>
      ) : (
        <button className={cls} {...(props as ButtonProps)}>
          {children}
        </button>
      )}
    </span>
  );
}
