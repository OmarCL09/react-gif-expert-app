import { render, fireEvent, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('pruebas en AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onAddCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } });

        expect( input.value ).toBe('Saitama');
        screen.debug();
    })  

    test('debe de llamar onAddCategory si el input tiene un valor', () => { 
        const inputValue    = 'Saitama'; 
        const onNewCategory = jest.fn(); 

        render(<AddCategory onAddCategory={ onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn(); 
        render(<AddCategory onAddCategory={ () => {} } />)

        const form  = screen.getByRole('form');
        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    })
})

