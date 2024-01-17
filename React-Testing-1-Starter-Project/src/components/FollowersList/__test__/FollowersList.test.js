import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockComponent = (props) => {
    return <BrowserRouter>
        <FollowersList {...props} />
    </BrowserRouter>
}

describe('Test for FollowersList component', ()=>{
    it('should render followers item', async ()=>{
        render(<MockComponent />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        // screen.debug();  // we can use this to print the html output
        expect(followerDivElement).toBeInTheDocument();
    });    

    it('should render multiple followers item', async ()=>{
        render(<MockComponent />);
        const followerDivElements = await screen.findAllByTestId(/follower-item/);
        
        expect(followerDivElements.length).toBe(5); 
    });  
})