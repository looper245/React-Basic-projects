import React from 'react'
import { useLocation } from 'react-router-dom'
export default function ProductSkeleton() {

    return (
        <>
            <header>
                <div className="img"></div>
                <div className="title"></div>
                <div className="search"></div>
            </header>
            <div className="product-container-skeleton">
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
            </div>
        </>
    )
}
