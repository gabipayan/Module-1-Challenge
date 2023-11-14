import { Input } from './Input'; 

const MyForm = () => {
  return (
    <form>
      {/* Default Input with placeholder */}
      <Input placeholder="Default Input" />

      {/* Input with custom type, placeholder, and elevation */}
      <Input type="email" placeholder="Email Address" elevation="2" />

      {/* Input with custom padding, border radius, and focus elevation */}
      <Input
        placeholder="Search"
        padding="10px 30px"
        borderRadius="30px"
        focusElevation="3"
      />

      {/* Full-width Input with custom height and background color */}
      <Input
        placeholder="Full Width Input"
        width="100%"
        height="60px"
        backgroundColor="#FFF"
      />

      {/* Password Input with custom border and elevated on focus */}
      <Input
        type="password"
        placeholder="Password"
        border="1px solid #ced4da"
        focusElevation="1"
      />
    </form>
  );
};

export default MyForm;