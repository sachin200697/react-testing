## Library needed

npm i -d @testing-library/jest-dom testing-library/react testing-library/user-event

## Steps

1. create setupTest.js file at the path where package.json present.

setupTests.js:

import '@testing-library/jest-dom';

2. for any folder let's 

React-Testing-1-Starter-Project\src\components\TodoFooter

create a folder __test__ and create a file for every component exists in in TodoFooter with 
the name as: file_name.test.js

ex: TodoFooter.test.js

import both lines :

import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

import component that need to test.

Then add test block:

it('should render the correct amount of incomplete tasks', ()=>{
    render(<MockComponent numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
});


## Grouping

we can group test blocks inside describe blocks.

describe('description', ()=>{
    //put test blocks here for related tests
});

## Testing external api: __mocks__

It is not good idea to test the actual api in front end. So instead of testing the api we shall mock the response of api.

1. Create __mocks__ folder inside src directory.

2. Create a file axios.js (this is the page)

3. But even we create mock data in file axios.js, it will not work because every time react reset the mock. So to overcome this problem we need to change the resetMocks flag for below file:
node_modules\react-scripts\scripts\utils\createJestConfig.js

4. Restart test: npm run test

## Before and After Each

Sometimes we want to apply some code before the actual test cases and sometimes after the test cases.

we can use before and after each outside the describe or inside it.

outside it will be apply for add test cases and inside it will be valid only the those test cases.

//it will run only one before test cases
beforeAll(()=>{
    console.log("Run once before all test cases");
});


//it will run every time before every test case
beforeEach(()=>{
    console.log("Run before each test case");
});

//it will run every time after every test case
afterEach(()=>{
    console.log("Run before each test case");
});

//it will run once after all test cases finished
afterAll(()=>{
    console.log("Run before each test case");
});
