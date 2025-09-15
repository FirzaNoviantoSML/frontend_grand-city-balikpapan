/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

interface RichTextNode {
    type: string;
    text?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    level?: number;
    url?: string;
    children?: RichTextNode[];
    format?: string;
    image?: any;
    language?: string;
}

interface RichTextRendererProps {
    content: RichTextNode[];
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
    const renderNode = (node: RichTextNode, index: number) => {
        switch (node.type) {
            case "heading":
                const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
                const headingSizes = {
                    1: "text-5xl",
                    2: "text-4xl",
                    3: "text-3xl",
                    4: "text-2xl",
                    5: "text-xl",
                    6: "text-lg",
                };
                const headingSize = headingSizes[node.level as keyof typeof headingSizes] || "text-xl";
                return (
                    <HeadingTag
                        key={index}
                        style={{color:"#404040"}}
                        className={`${headingSize} font-bold text-amber-300 my-4`}
                    >
                        {node.children?.map((child, i) => renderNode(child, i))}
                    </HeadingTag>
                );
            case "paragraph":
                return (
                    <p key={index} className="my-2">
                        {node.children?.map((child, i) => renderNode(child, i))}
                    </p>
                );
            case "text":
                let className = "";
                if (node.bold) className += "font-bold ";
                if (node.italic) className += "italic ";
                if (node.underline) className += "underline ";
                if (!node.text || node.text.trim() === "") {
                    return <br key={index} />;
                }

                return (
                    <span key={index} className={className}
                    style={{color:"#404040"}}>
                    {node.text}
                    </span>
                );
            case "link":
                return (
                    <Link
                        target="_blank"
                        key={index}
                        href={node.url || "#"}
                        className="text-blue-800 hover:underline"
                    >
                        {node.children?.map((child, i) => renderNode(child, i))}
                    </Link>
                );
            case "list":
                const ListTag = node.format === "ordered" ? "ol" : "ul";
                const listStyleClass =
                    node.format === "ordered" ? "list-decimal" : "list-disc";
                return (
                    <ListTag
                        key={index}
                        className={`${listStyleClass} list-inside pl-5 my-2`}
                    >
                        {node.children?.map((child, i) => renderNode(child, i))}
                    </ListTag>
                );
            case "list-item":
                return (
                    <li key={index}>
                        {node.children?.map((child, i) => renderNode(child, i))}
                    </li>
                );
            case "image":
                return (
                    <Image
                        key={index}
                        src={node.image.url}
                        width={node.image.width}
                        height={node.image.height}
                        alt={node.image.alternativeText}
                        className="my-4"
                    />
                );
            case "code":
                return (
                    <pre
                        key={index}
                        className="bg-neutral-900 text-xs md:text-base text-white p-4 rounded-md"
                    >
                        <code>
                            {node.children?.map((child, i) => renderNode(child, i))}
                        </code>
                    </pre>
                );
            case "quote":
                return (
                    <blockquote
                        key={index}
                        className="border-l-4 border-neutral-900 pl-4 italic my-4"
                    >
                        {node.children?.map((child, i) => renderNode(child, i))}
                    </blockquote>
                );
            default:
                return null;
        }
    };

    return <div>{content.map((node, index) => renderNode(node, index))}</div>;
};

export default RichTextRenderer;