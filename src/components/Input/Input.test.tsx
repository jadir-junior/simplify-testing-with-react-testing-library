import { render, screen } from '@testing-library/react';

import { Input } from '.';
import React from 'react';

describe('<Input />', () => {
    it('Should render', () => {
        render(<Input />)
    })
})