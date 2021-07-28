import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="column four wide" key={id} style={{ marginTop: "70px" }} >
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image" style={{ height: "40vh", width: "auto", marginBottom: "50px", backgroundColor: "#ffffff" }}>
                                <img src={image} alt={title} style={{ height: "100%", width: "90%", margin: "auto" }} />
                            </div>
                            <div className="content" style={{ height: "26vh" }}>
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });


    return (
        <>{renderList}</>
    );
};

export default ProductComponent;