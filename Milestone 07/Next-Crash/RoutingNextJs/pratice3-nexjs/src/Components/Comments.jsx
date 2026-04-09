const Comments = async ({ promise }) => {
  const { name, body } = await promise;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{name}</h2>

      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
};

export default Comments;

//1. CSR == Client side Rendering Or (CSR).
//2. SSR == Server Side Rendering or (SSR).

//3. Static Side Generation (SSG)
//4. incremental Static Regeneration (ISR)
//5. Partial Prerendering (PPR)
