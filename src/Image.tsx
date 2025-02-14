interface ImageProps {
    src: string;
    className?: string;
    alt?: string;
}

function Image({ src, className, alt }: ImageProps) {
    const logo = new URL(src, import.meta.env.VITE_BASE_URL ?? '/');
    return (<img src={logo.toString()} className={className} alt={alt} />);
}

export default Image;