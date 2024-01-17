import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

// Error: Invariant failed: You should not use <Link> outside a <Router>

// Because we are using Link component inside TodoFooter and we are only allow to use it inside 
// Router, so it will give error beucase we are testing only TodoFooter and Router component is 
// inside index.js File

// So we can create a Mock component 
import { BrowserRouter } from "react-router-dom/";
const MockComponent = ({numberOfIncompleteTasks}) => {
    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
}



it('should render the correct amount of incomplete tasks', ()=>{
    render(<MockComponent numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when pass single task', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
});

it('should render that is true', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
    expect(paragraphElement).toBeVisible();
    
    // all methods available to test the output
    // toBeInTheDocument
    // toBeDisabled
    // toBeEnabled
    // toBeEmpty
    // toBeEmptyDOMElement
    // toBeInvalid
    // toBeRequired
    // toBeValid
    // toBeVisible
    // toContainElement
    // toContainHTML
    // toHaveAttribute
    // toHaveClass
    // toHaveFocus
    // toHaveFormValues
    // toHaveStyle
    // toHaveTextContent
    // toHaveValue
    // toHaveDisplayValue
    // toBeChecked
    // toBePartiallyChecked
    // toHaveDescription
});


it('should render that is visible', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
});

it('should contain an html element', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML('p');
});

it('should have text content for testid', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");    //para is same text that we mention in TodoFooter.js for p element
    expect(paragraphElement).toHaveTextContent("1 task left");
});

it('should have text content', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).not.toHaveTextContent("4 task left ans");
});

it('should have text content using value property', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement.textContent).toBe("1 task left");
});

it('should have text content using textContent', ()=>{
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
});

describe('Test cases for TodoFooter component', ()=>{
    it('Inside describe block 1 - should have text content', ()=>{
        render(<MockComponent numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).not.toHaveTextContent("4 task left ans");
    });
    
    it('Inside describe block 1 - should have text content using value property', ()=>{
        render(<MockComponent numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement.textContent).toBe("1 task left");
    });
    
    it('Inside describe block 1 - should have text content using textContent', ()=>{
        render(<MockComponent numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByTestId("para");
        expect(paragraphElement.textContent).toBe("1 task left");
    });
});

describe('Test cases for TodoFooter component - block 2', ()=>{

    describe('Test cases for TodoFooter component - block 2.1', ()=>{
        it('Inside describe block 2 - should have text content', ()=>{
            render(<MockComponent numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement).not.toHaveTextContent("4 task left ans");
        });
        
        it('Inside describe block 2 - should have text content using value property', ()=>{
            render(<MockComponent numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement.textContent).toBe("1 task left");
        });
    });
    describe('Test cases for TodoFooter component - block 2.2', ()=>{
        it('Inside describe block 2 - should have text content', ()=>{
            render(<MockComponent numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement).not.toHaveTextContent("4 task left ans");
        });
        
        it('Inside describe block 2 - should have text content using value property', ()=>{
            render(<MockComponent numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement.textContent).toBe("1 task left");
        });
    });
    describe('Test cases for TodoFooter component - block 2.3', ()=>{
        it('Inside describe block 2 - should have text content', ()=>{
            render(<MockComponent numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement).not.toHaveTextContent("4 task left ans");
        });
        
        it('Inside describe block 2 - should have text content using value property', ()=>{
            render(<MockComponent numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement.textContent).toBe("1 task left");
        });
    });
    
    
    it('Inside describe block 2 - should have text content using textContent', ()=>{
        render(<MockComponent numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByTestId("para");
        expect(paragraphElement.textContent).toBe("1 task left");
    });
});