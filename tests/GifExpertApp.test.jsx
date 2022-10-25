import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from "../src/components/AddCategory";

describe('Pruebas en GifExpertApp', () => {

    test('Debe estar solamente One Punch Man como default en categories', () => {
        
        const { container } = render( <GifExpertApp />);
        expect( container ).toMatchSnapshot();
        expect( screen.getAllByText('One Punch Man'));

    });

    test('Se debe agregar una nueva categoria al DOM', () => { 

        const { container } = render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: 'Chainsaw man' } });
        fireEvent.submit( form );

        expect( container ).toMatchSnapshot();
        expect( screen.getAllByText('Chainsaw man'));

    })
});