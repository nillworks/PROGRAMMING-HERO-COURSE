'use client';

import React from 'react';
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

const BooksPage = () => {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newBookData = Object.fromEntries(formData.entries());
    console.log(newBookData);

    const request = await fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBookData),
    });

    const res = await request.json();
    if (res.success) {
      alert('user created successfully');
      redirect('all-books');
    }

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">📚 Add New Book</h1>

        <Form onSubmit={onSubmit} className="w-full">
          <Fieldset>
            <Fieldset.Legend>Book Information</Fieldset.Legend>
            <Description>Add a new book to your collection.</Description>

            <FieldGroup>
              <TextField isRequired name="title">
                <Label>Book Title</Label>
                <Input placeholder="Atomic Habits" />
                <FieldError />
              </TextField>

              <TextField isRequired name="author">
                <Label>Author</Label>
                <Input placeholder="James Clear" />
                <FieldError />
              </TextField>

              <TextField isRequired name="price" type="number">
                <Label>Price</Label>
                <Input placeholder="450" />
                <FieldError />
              </TextField>

              <TextField isRequired name="category">
                <Label>Category</Label>
                <Input placeholder="Self Development" />
                <FieldError />
              </TextField>

              <TextField isRequired name="description">
                <Label>Description</Label>
                <TextArea placeholder="Write something about the book..." />
                <FieldError />
              </TextField>
            </FieldGroup>

            <Fieldset.Actions className="mt-4 flex gap-3">
              <Button type="submit">
                <FloppyDisk />
                Save Book
              </Button>

              <Button type="reset" variant="secondary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default BooksPage;
