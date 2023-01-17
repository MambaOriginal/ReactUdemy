import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('pruebas en <FirstApp/> Component', () => {
    test('debe hacer match con el snapshot', () => {
        render( <FirstApp />)
    })
})