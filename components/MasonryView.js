import React from "react";
import Gallery from "react-photo-gallery";
import { Murals } from "./Images";


const MasonryView = () => {
    return (
        <Gallery photos={Murals} direction={"column"} margin={10} />
    );
}
export default MasonryView;

