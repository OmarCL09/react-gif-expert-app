import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests in GifItem component', () => { 

    const title = 'Chainsaw Man';
    const url = 'http://locura.com/diablossenorita.jpg';

    test('should render a gif', () => { 
        const { container } = render(<GifItem title={title} url={url}/>);
        expect( container ).toMatchSnapshot();
    })

    test('debe mostrar la imagen con url y alt indicado', () => { 
        const { container } = render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    }) 

    test('debe de mostrar el titulo del componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
}) 