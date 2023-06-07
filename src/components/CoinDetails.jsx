import {
  Box,
  Container,
  HStack,
  Radio,
  Button,
  RadioGroup,
  useMediaQuery,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { server } from "../index";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import Chart from "./Chart";

const CoinDetails = () => {
  const params = useParams();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState();
  const [inPhone] = useMediaQuery("(max-width: 400px)");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("1y");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;
      default:
        setDays("24h");
        setLoading(true);
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoins(data);

        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id, currency, days]);

  if (error) {
    return <ErrorComponent message={"Error while fetching coin"} />;
  }

  return (
    <>
      <Container
        maxW={"container.xl"}
        marginTop={inPhone ? "3.5rem" : "0rem"}
        py={inPhone ? "2" : null}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box
              // w={inPhone ? "full" : "75%"}
              w={"full"}
              marginTop={inPhone ? "1rem" : "4rem"}
              borderWidth={0.3}
            >
              <Chart arr={chartArray} currency={currencySymbol} days={days} />
            </Box>
            <HStack p={inPhone ? "5" : "4"} overflowX={"auto"}>
              {btns.map((i) => {
                return (
                  <Button
                    // p={inPhone ? "1rem" : null}
                    h={inPhone ? "2rem" : null}
                    w={inPhone ? "2rem" : null}
                    fontSize={inPhone ? "0.7rem" : null}
                    key={i}
                    onClick={() => switchChartStats(i)}
                  >
                    {i}
                  </Button>
                );
              })}
            </HStack>
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

            <VStack
              spacing={"4"}
              p={inPhone ? "0.5" : "16"}
              alignItems={"flex-start"}
            >
              {/* <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
                Last Updated On{" "}
                {Date(coins.market_data.last_updated).split("G")[0]}
              </Text> */}
              <Image
                src={coins.image.large}
                w={inPhone ? "30%" : "28%"}
                my={inPhone ? "1rem" : null}
                objectFit={"contain"}
              />
              <Stat>
                <StatLabel fontSize={"2rem"}>{coins.name}</StatLabel>
                <StatNumber fontSize={"1.1rem"}>
                  {currencySymbol}
                  {coins.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText my={inPhone ? "1rem" : null}>
                  <StatArrow
                    type={
                      coins.market_data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coins.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
              <Badge
                fontSize={"2xl"}
                borderRadius={"5px"}
                border={"2px dotted"}
              >{`#${coins.market_cap_rank}`}</Badge>
              <Text
                fontSize={"small"}
                textAlign={"center"}
                alignSelf={"center"}
                opacity={"0.7"}
              >
                Last Updated On{" "}
                {Date(coins.market_data.last_updated).split("G")[0]}
              </Text>
            </VStack>

            <VStack>
              <CustomBar
                high={`${currencySymbol}${coins.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coins.market_data.low_24h[currency]}`}
              />
              <Box w={"full"} p={"4"}>
                <Item
                  title={"Max Supply"}
                  value={
                    coins.market_data.max_supply === null
                      ? "N/A"
                      : coins.market_data.max_supply
                  }
                />
                <Item
                  title={"Circulating Supply"}
                  value={
                    coins.market_data.circulating_supply === null
                      ? "N/A"
                      : coins.market_data.circulating_supply
                  }
                />
                <Item
                  title={"Market Capital"}
                  value={
                    coins.market_data.market_cap === null
                      ? "N/A"
                      : `${currencySymbol}${coins.market_data.market_cap[currency]}`
                  }
                />
                <Item
                  title={"All Time Low"}
                  value={
                    coins.market_data.atl === null
                      ? "N/A"
                      : `${currencySymbol}${coins.market_data.atl[currency]}`
                  }
                />
                <Item
                  title={"All Time High"}
                  value={
                    coins.market_data.ath === null
                      ? "N/A"
                      : `${currencySymbol}${coins.market_data.ath[currency]}`
                  }
                />
              </Box>
            </VStack>
          </>
        )}
      </Container>
    </>
  );
};

const CustomBar = ({ high, low }) => {
  return (
    <>
      <VStack w={"full"}>
        <Progress value={50} colorScheme={"teal"} w={"full"} />
        <HStack justifyContent={"space-between"} w={"full"}>
          <Badge children={low} colorScheme={"red"} />
          <Text fontSize={"sm"}>24H Range</Text>
          <Badge children={high} colorScheme={"green"} />
        </HStack>
      </VStack>
    </>
  );
};

const Item = ({ title, value }) => {
  return (
    <>
      <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
        <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
          {title}
        </Text>
        <Text>{value}</Text>
      </HStack>
    </>
  );
};

export default CoinDetails;
