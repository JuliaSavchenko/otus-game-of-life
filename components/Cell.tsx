import { CellType } from "./Field";
import "./Cell.css";

export type CellProps = {
    type: CellType;
    onSelect: () => void;
}

export default function Cell(props: CellProps) {
    
    let className = "cell-" + props.type.toString().toLocaleLowerCase();

    return (
        <div className={"cell " + className} onClick={props.onSelect}></div>
    )
}