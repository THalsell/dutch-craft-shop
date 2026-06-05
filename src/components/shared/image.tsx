import NextImage, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils/cn";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  containerClassName?: string;
};

export function Image({ className, containerClassName, alt, ...props }: Props) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <NextImage alt={alt} className={cn("object-cover", className)} {...props} />
    </div>
  );
}
