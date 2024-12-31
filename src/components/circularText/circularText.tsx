import { CustomCSSProperties } from "@/types/customCSSProperties";
import { useEffect, useState } from "react";

interface CircularTextProps {
    text?: string;
    spacing?: number;
    size?: number;
}

const CircularText: React.FC<CircularTextProps> = ({ 
    text = "Circular Text • ",
    spacing = 1,
    size = 1
}) => {
    const [chars, setChars] = useState<string[]>([]);
    const h1Style: CustomCSSProperties = {
        fontSize: `${size}rem`,
        '--char-count': chars.length 
    };
    
    
    useEffect(() => {
        const characters = text.split('');
        setChars(characters);
    }, [text]);

    const getRadius = (charCount: number): string => {
        const innerAngle = 360 / charCount;
        const sinValue = Math.sin(innerAngle * (Math.PI / 180));
        return `calc((${spacing} / ${sinValue}) * -1ch)`;
    };

    const getRotation = (index: number, total: number): number => {
        const innerAngle = 360 / total;
        return innerAngle * index;
    };

    return (
        <div className="relative min-h-[250px] aspect-square grid place-items-center">
            <h1 
                className="relative text-base uppercase font-metropolis animate-spin-slow"
                style={ h1Style }
            >
                {chars.map((char, index) => (
                    <span
                        key={index}
                        className="absolute top-1/2 left-1/2 inline-block text-[0.68rem] xs:text-sm text-secondary"
                        aria-hidden="true"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${getRotation(index, chars.length)}deg) translateY(${getRadius(chars.length)})`
                        }}
                    >
                        {char}
                    </span>
                ))}
                <span className="sr-only">{text}</span>
            </h1>
        </div>
    );
};

export default CircularText;