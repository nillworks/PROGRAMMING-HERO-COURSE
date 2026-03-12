const products = [
  { id: 1, name: 'Laptop', price: 50000, brand: 'Dell' },
  { id: 2, name: 'Mobile', price: 20000, brand: 'Samsung' },
  { id: 3, name: 'Headphone', price: 2000, brand: 'Sony' },
  { id: 4, name: 'Keyboard', price: 1500, brand: 'Logitech' },
];

const Header = () => {
  return (
    <div>
      <Parson products={products[0]} />
    </div>
  );
};

const Parson = ({ name }) => {
  return <div>{name}</div>;
};

export default Header;
