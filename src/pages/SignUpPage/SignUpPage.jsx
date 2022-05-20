import {
  Container,
  FormControl,
  Input,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Button,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import logo from "../../assets/uber-eats-logo-0.png";
import * as Yup from "yup";
import Label from "../../components/Label/Label";
import Client from "../../services/Client";
import Navigator from "../../router/Navigator";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Nome deve ser preenchido"),
  email: Yup.string().email().required("E-mail deve ser prenchido"),
  cpf: Yup.string().required("CPF deve ser preeenchido"),
  password: Yup.string().required("Senha deve ser preenchida"),
  confirmPwd: Yup.string()
    .required("Senha deve ser preenchida")
    .oneOf([Yup.ref("password")], "Deve ser a mesma senha que a anterior"),
});

const SignUpPage = () => {
  const navigate = new Navigator();
  const api = new Client();

  const onClickSubmit = (values, actions) => {
    api
      .signup(values)
      .then((res) => {
        actions.setSubmitting(false);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate.address();
        }
      })
      .catch((err) => {
        actions.setSubmitting(false);
        alert(err);
      });
  };

  return (
    <Container maxW="container.xl" p={0}>
      <VStack w="full" h="100vh" p={5} spacing={10} justify="center">
        <Image src={logo} alt="Dan Abramov" w="30%" />
        <Text fontWeight={"bold"} fontSize="md">
          Cadastrar
        </Text>
        <SimpleGrid columns={1} rowGap={6} w="full">
          <Formik
            initialValues={{
              name: "",
              email: "",
              cpf: "",
              password: "",
              confirmPwd: "",
            }}
            onSubmit={onClickSubmit}
            validationSchema={SignupSchema}
          >
            {(props) => (
              <Form>
                <VStack spacing={5}>
                  <Field name="name">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Input
                            {...field}
                            id="name"
                            placeholder="Nome e sobrenome"
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text={"Nome*"} />
                      </Box>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <Input
                            {...field}
                            id="email"
                            placeholder="email@email.com"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="E-mail*" />
                      </Box>
                    )}
                  </Field>

                  <Field name="cpf">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.cpf && form.touched.cpf}
                        >
                          <Input
                            {...field}
                            id="cpf"
                            placeholder="000.000.000-00"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>{form.errors.cpf}</FormErrorMessage>
                        </FormControl>
                        <Label text="CPF*" />
                      </Box>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <Input
                            {...field}
                            id="password"
                            type="password"
                            placeholder="Mínimo 6 caracteres"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Senha*" />
                      </Box>
                    )}
                  </Field>

                  <Field name="confirmPwd">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={
                            form.errors.confirmPwd && form.touched.confirmPwd
                          }
                        >
                          <Input
                            {...field}
                            type="password"
                            placeholder="Confirme a senha anterior"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.confirmPwd}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Confirmar*" />
                      </Box>
                    )}
                  </Field>

                  <Button
                    size={"lg"}
                    mt={10}
                    w="full"
                    colorScheme="brand"
                    borderRadius={"2px"}
                    type={"submit"}
                    isLoading={props.isSubmitting}
                  >
                    Criar
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default SignUpPage;
