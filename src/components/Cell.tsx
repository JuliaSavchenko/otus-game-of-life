import { CellType } from "./Field";
import './Cell.css';
import React from "react";

export type CellProps = {
    type: CellType;
    onSelect: () => void;
}

export default function Cell(props: CellProps & React.HTMLProps<HTMLDivElement>) {
    
    let className = "cell-" + props.type.toString().toLocaleLowerCase();

    return (
        <div data-testid="cell" className={"cell " + className} onClick={props.onSelect} id={props.id}></div>
    )
}