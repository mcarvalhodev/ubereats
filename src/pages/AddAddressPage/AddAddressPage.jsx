import {
  Container,
  FormControl,
  Input,
  SimpleGrid,
  Text,
  VStack,
  Button,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Label from "../../components/Label/Label";
import Client from "../../services/Client";
import Navigator from "../../router/Navigator";

const AddressSchema = Yup.object().shape({
  street: Yup.string().required(),
  number: Yup.string().required(),
  neighbourhood: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
});

const AddAddressPage = () => {
  const navigate = new Navigator();
  const api = new Client();

  const onClickSubmit = (values, actions) => {
    api
      .addAddress(values)
      .then((res) => {
        actions.setSubmitting(false);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate.feed();
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
        <Text fontWeight={"bold"} fontSize="md">
          Meu endereço
        </Text>
        <SimpleGrid columns={1} rowGap={6} w="full">
          <Formik
            initialValues={{
              street: "R. Afonso Braz",
              number: "177",
              neighbourhood: "Vila N. Conceição",
              city: "São Paulo",
              state: "SP",
              complement: "71",
            }}
            onSubmit={onClickSubmit}
            validationSchema={AddressSchema}
          >
            {(props) => (
              <Form>
                <VStack spacing={5}>
                  <Field name="street">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.street && form.touched.street}
                        >
                          <Input
                            {...field}
                            id="street"
                            placeholder="Rua / Av"
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.street}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text={"Logradouro"} />
                      </Box>
                    )}
                  </Field>

                  <Field name="number">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.number && form.touched.number}
                        >
                          <Input
                            {...field}
                            id="number"
                            placeholder="Número"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.number}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Número*" />
                      </Box>
                    )}
                  </Field>

                  <Field name="complement">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={
                            form.errors.complement && form.touched.complement
                          }
                        >
                          <Input
                            {...field}
                            id="complement"
                            placeholder="Apto. / Bloco"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.complement}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Complemento" />
                      </Box>
                    )}
                  </Field>

                  <Field name="neighbourhood">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={
                            form.errors.neighbourhood &&
                            form.touched.neighbourhood
                          }
                        >
                          <Input
                            {...field}
                            id="neighbourhood"
                            type="neighbourhood"
                            placeholder="Mínimo 6 caracteres"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.neighbourhood}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Bairro*" />
                      </Box>
                    )}
                  </Field>

                  <Field name="city">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.city && form.touched.city}
                        >
                          <Input
                            {...field}
                            type="text"
                            placeholder="Cidade"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.city}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Cidade" />
                      </Box>
                    )}
                  </Field>

                  <Field name="state">
                    {({ field, form }) => (
                      <Box pos="relative" w="full">
                        <FormControl
                          isInvalid={form.errors.state && form.touched.state}
                        >
                          <Input
                            {...field}
                            type="text"
                            placeholder="Estado"
                            borderRadius={"2px"}
                            border={"1px"}
                            py="24px"
                          />
                          <FormErrorMessage>
                            {form.errors.state}
                          </FormErrorMessage>
                        </FormControl>
                        <Label text="Estado" />
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

export default AddAddressPage;
