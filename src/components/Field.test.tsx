import Field from './Field';
import React from "react";

import { render }  from '@testing-library/react';
 
describe('Field', () => {
    test('changing the field size', () => {
        const element = render (
            <Field width={20} height={20}></Field>
        )

        expect(element.getAllByTestId("cell").length).toEqual(400);
    })
})
