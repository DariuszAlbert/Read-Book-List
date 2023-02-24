import { screen, render, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import BookCreate from "./BookCreate";

test('Component shows Label, Input and Button', ()=>{
    render(<BookCreate />);

    
    const heading = screen.getByText('Add a Book')
    const label = screen.getByText('Title');
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

//if elements exists

    expect(heading).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    
});

test('it calls bookCreate when the form is submited and clears input', ()=>{

     const mock = jest.fn();

     render(<BookCreate createBook={mock} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    user.click(input);
    user.keyboard('Czarny Łabędź');

    user.click(button)


// if call createBook function

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('Czarny Łabędź');

});


test('if clear input after form is submitted', async ()=>{

    const mock = jest.fn();

    render(<BookCreate createBook={mock} />);

   const input = screen.getByRole('textbox');
   const button = screen.getByRole('button');

   user.click(input);
   user.keyboard('Czarny Łabędź');

   user.click(button)

// if clears input after form is subitted

   await waitFor(()=>expect(input).toHaveValue(''));

});
