import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { addToCart } from "../../redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/ToggleCartSlice/ToggleCartSlice";

export const CardProductMap = ({ product }) => {
  const { name, description, price_normal, img, id } = product;
  const dispatch = useDispatch();

  return (
    <Card key={id} boxShadow="0px 0px 9px 1px gray" maxW="250px">
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={img}
          alt={name}
          borderRadius="lg"
          width="70%"
          height="70%"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {`$${price_normal}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="red">
            Buy now
          </Button>
          <Button
            onClick={() => {
              dispatch(addToCart(product));
              dispatch(toggleCart());
            }}
            variant="ghost"
            colorScheme="blue"
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
