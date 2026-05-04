'use client';
import { FloppyDisk } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';
import { redirect } from 'next/navigation';

const NewProductPage = () => {
  const onSubmit = async event => {
    event.preventDefault();
    const fromData = new FormData(event.target);
    const newProduct = Object.fromEntries(fromData.entries());
    console.log(newProduct);

    // ToDo: send new product data to the server
    const req = await fetch('http://localhost:8000/product', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const res = await req.json();
    if (res.success) {
      alert('user created successfully');
      redirect('/');
    }

    event.target.reset();
  };

  return (
    <Form
      className="w-full max-w-96 mx-auto mt-10 shadow px-2 py-3 rounded-lg"
      onSubmit={onSubmit}
    >
      <Fieldset>
        <Fieldset.Legend>Product Settings</Fieldset.Legend>
        <Description>Update your product information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={value => {
              if (value.length < 3) {
                return 'Name must be at least 3 characters';
              }
              return null;
            }}
          >
            <Label>Product Name</Label>
            <Input placeholder="Enter your Product Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="price" type="number">
            <Label>Product Price</Label>
            <Input placeholder="Enter Your Price" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Update Product
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
};

export default NewProductPage;
