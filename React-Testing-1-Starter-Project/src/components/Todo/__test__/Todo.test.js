import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Todo from '../Todo';

const MockComponent = (props) => {
    return <BrowserRouter>
        <Todo {...props} />
    </BrowserRouter>
}

describe('Test for Todo component', ()=>{
    it('Test todo to add single task', ()=>{
        render(<MockComponent />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole('button', {name: /Add/i});

        fireEvent.change(inputElement, {target: {value: 'Read a book'}});
        fireEvent.click(addButton);

        const divElement = screen.getByText(/Read a book/i);
        expect(divElement).toBeInTheDocument('');
    });

    it('Test todo to add multiple tasks', ()=>{
        render(<MockComponent />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole('button', {name: /Add/i});

        fireEvent.change(inputElement, {target: {value: 'Read a book'}});
        fireEvent.click(addButton);
        
        fireEvent.change(inputElement, {target: {value: 'Check SM status'}});
        fireEvent.click(addButton);

        fireEvent.change(inputElement, {target: {value: 'Play badminton'}});
        fireEvent.click(addButton);

        const divElements = screen.getAllByTestId(/task-container/i);
        expect(divElements.length).toBe(3);
    });

    it('Task should not have completed class when initially rendered', ()=>{
        render(<MockComponent />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole('button', {name: /Add/i});

        fireEvent.change(inputElement, {target: {value: 'Read a book'}});
        fireEvent.click(addButton);        

        const divElement = screen.getByText(/Read a book/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('Task should have completed class when clicked', ()=>{
        render(<MockComponent />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole('button', {name: /Add/i});

        fireEvent.change(inputElement, {target: {value: 'Read a book'}});
        fireEvent.click(addButton);        

        const divElement = screen.getByText(/Read a book/i);
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active");
    });
})