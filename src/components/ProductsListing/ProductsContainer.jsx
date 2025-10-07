import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsList from "./ProductsList";
import useProductsData from "../../hooks/useProductsData";

/* ProductsContainer() : handles fetching products, fetching filter values & InfiniteScroll
all business logic (data fetching, filtering, pagination) is moved into a custom hook
useProductsData() */

export default function ProductsContainer() {

    const {
        isLoading,
        isError,
        error,
        visibleProducts,
        fetchMore,
        hasMore,
    } = useProductsData();

    if (isLoading) return <p>Loading products...</p>;
    if (isError) return <p>Error loading products: {error?.message}</p>;

    return(
        <InfiniteScroll
            dataLength={visibleProducts.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={<h4>Loading more products...</h4>}
            endMessage={<p style={{ textAlign: "center" }}>No more products</p>}
        >
            <ProductsList products={visibleProducts} />
        </InfiniteScroll>
    )
}
