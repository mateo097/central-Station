import React, { useRef } from "react";
import "./slider.css";
import { Grid, GridSize } from "@material-ui/core"


interface SliderProps {
    className?: string;
    xs?: GridSize;
    sm?: GridSize;
    md?: GridSize;
    lg?: GridSize;
    xl?: GridSize;
    children?: React.ReactNode[];
}

const Slider = ({
    className,
    children,
    xs,
    sm,
    md,
    lg,
    xl,
}: SliderProps) => {

    const slider = useRef<HTMLHeadingElement>(null);

    let startX: number;
    let scrollLeft: number;
    let isDown = false;

    return <Grid
        ref={slider}
        item
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        container
        onMouseDown={(e) => {
            const sliderRed = slider.current;
            isDown = true;
            if (sliderRed) {
                sliderRed.classList.add("active")
                startX = e.pageX - sliderRed.offsetLeft;
                scrollLeft = sliderRed.scrollLeft;
            }
        }}
        onMouseLeave={(e) => {
            isDown = false;
            slider?.current?.classList.remove("active")
        }}
        onMouseUp={(e) => {
            isDown = false;
            slider?.current?.classList.remove("active")
        }}
        onMouseMove={(e) => {
            if (!isDown) return;
            e.preventDefault();
            if (slider?.current) {
                const x = e.pageX - slider.current?.offsetLeft;
                const walk = x - startX;
                slider.current.scrollLeft = scrollLeft - walk
            }
        }}
        className="slide-container">
        <Grid item className={`${className}`}>
            {
                children?.map((child, index) => <div id={index.toString()} key={index.toString()} className="slider-item">{child}</div>)
            }
        </Grid>
    </Grid>
}

export default Slider;