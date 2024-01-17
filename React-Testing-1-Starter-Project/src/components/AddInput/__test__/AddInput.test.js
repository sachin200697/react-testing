import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const mockFunction = jest.fn();

describe('Tests for AddInput component', ()=>{
    it('should render input element', async ()=>{
        render(<AddInput 
            todos={[]} 
            setTodos={mockFunction} //here because we don't care what setTodos does so can pass 
            // an empty function ()=>{}  or a mock function that jest provides
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();

    });

    it('should be able to type into input element', async ()=>{
        render(<AddInput 
            todos={[]} 
            setTodos={mockFunction} //here because we don't care what setTodos does so can pass 
            // an empty function ()=>{}  or a mock function that jest provides
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        fireEvent.change(inputElement, { target: {value: 'Read a book'}});
        expect(inputElement.value).toBe('Read a book');

    });

    it('should have empty input when Add button is clicked', async ()=>{
        render(<AddInput 
            todos={[]} 
            setTodos={mockFunction} //here because we don't care what setTodos does so can pass 
            // an empty function ()=>{}  or a mock function that jest provides
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole('button', {name:/add/i});    //here name is the button text

        await fireEvent.change(inputElement, { target: {value: 'Read a book'}});        
        await fireEvent.click(addButton);

        expect(inputElement.value).toBe('');

    });
});