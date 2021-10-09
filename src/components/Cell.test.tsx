import { render, fireEvent } from '@testing-library/react';

import Cell from './Cell';
import { CellType } from './Field';
import React from "react";

describe('Cell', () => {
    test('check event listner for Cell component', async () => {
        const handleClick = jest.fn();

        render (
            <Cell id="cell" type={CellType.DEAD} onSelect={handleClick}></Cell>
        )

        fireEvent.click(document.getElementById("cell"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})