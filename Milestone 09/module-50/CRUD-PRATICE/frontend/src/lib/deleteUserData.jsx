'use server';

import { revalidatePath } from 'next/cache';

const deleteUserData = async userid => {
  const res = await fetch(`http://localhost:8000/users/${userid}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath('/users');
  }

  return data;
};

export default deleteUserData;
