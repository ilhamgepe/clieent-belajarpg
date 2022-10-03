import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Center, Text } from "@mantine/core";

function Signup() {
  const form = useForm({
    initialValues: { name: "", email: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
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
      <Center>
        <Button type="submit" mt="sm" fullWidth>
          Signup
        </Button>
      </Center>
    </form>
  );
}
export default Signup;
