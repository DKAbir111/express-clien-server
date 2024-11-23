import { useLoaderData } from "react-router-dom"

export default function Product() {
    const product = useLoaderData();
    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        maxWidth: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif"
    };

    const titleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "8px",
        color: "#333"
    };

    const descriptionStyle = {
        fontSize: "1rem",
        marginBottom: "12px",
        color: "#555"
    };

    const priceStyle = {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#007BFF"
    };

    return (
        <div style={cardStyle}>
            <h2 style={titleStyle}>{product.name}</h2>
            <p style={descriptionStyle}>{product.description}</p>
            <p style={priceStyle}>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>
        </div>
    )
}
