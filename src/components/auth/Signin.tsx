import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Center, Text } from "@mantine/core";

function Signin() {
  const form = useForm({
    initialValues: { name: "", password: "", email: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 5 ? "Name must have at least 5 letters" : null,
      password: (value) =>
        value.length < 5 ? "Name must have at least 5 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        {...form.getInputProps("password")}
      />
      <Center>
        <Button type="submit" mt="sm" fullWidth>
          Signin
        </Button>
      </Center>
    </form>
  );
}
export default Signin;
