import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, RadioGroup, Radio, useMediaQuery } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btn = new Array(103).fill(1);

  const [inPhone] = useMediaQuery("(max-width: 400px)");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        // console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) {
    return <ErrorComponent message={"Error while fetching coins"} />;
  }
  return (
    <>
      <Container  maxW={"container.xl"} marginTop={inPhone ? "3.5rem" : "0rem"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack justifyContent={inPhone ? "center" : "flex-start"}>
              <fieldset
                style={{
                  border: "2px solid black",
                  borderRadius: "5px",
                  padding: "1rem",
                  display: "inline",
                }}
              >
                <legend>
                  <b>Currency</b>
                </legend>
                <RadioGroup value={currency} onChange={setCurrency}>
                  <HStack spacing={4}>
                    <Radio value="inr">₹ INR</Radio>
                    <Radio value="usd">$ USD</Radio>
                    <Radio value="eur">€ EUR</Radio>
                  </HStack>
                </RadioGroup>
              </fieldset>
            </HStack>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((i) => {
                return (
                  <CoinCard
                    id={i.id}
                    name={i.name}
                    img={i.image}
                    price={i.current_price}
                    url={i.url}
                    symbol={i.symbol}
                    currencySymbol={currencySymbol}
                  />
                );
              })}
            </HStack>
            <HStack w={"full"} overflowX={"auto"} p={"8"}>
              {btn.map((item, index) => (
                <Button
                  key={index}
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

export default Coins;
