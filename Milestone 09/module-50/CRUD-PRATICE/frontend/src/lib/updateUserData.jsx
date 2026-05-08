import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const updateUserData = async (userId, formData) => {
  const updateUser = Object.fromEntries(formData.entries());

  const res = await fetch(`http://localhost:8000/users/${userId}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updateUser),
  });

  const data = await res.json();

  if (data.modifiedCount > 0) {
    revalidatePath('/users');
    redirect('/users');
  }

  console.log(data);

  //ToDO: Revalidation

  return data;
};

export default updateUserData;
