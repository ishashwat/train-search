import React, { useState } from "react";
import {
  Container,
  Paper,
  Input,
  Button,
  Text,
  Loader,
  Select,
} from "@mantine/core";
import { BackgroundImage, Box } from "@mantine/core";



const sources = ["Patna", "Varansi", "asd"];
const destinations = ["Patna", "Varansi", "asd"];

function TrainSearch() {
  const [source, setSource] = useState("");
  const [sourceList, setSourceList] = useState(
    sources.map((src) => {
      return { value: src, label: src };
    })
  );
  const [destList, setDestList] = useState(
    destinations.map((dest) => {
      return { value: dest, label: dest };
    })
  );
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  // todo useeffect to fetch list data from apis

  return (
    <BackgroundImage
      src="https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_960_720.jpg"
      radius="xl"
      style={{ height: "80vh" }}
    >
      <Box maw={500} mx="auto" style={{ padding: "2rem" }}>
        <Container size="sm" style={{ paddingTop: "2rem" }}>
          <Paper padding="lg" shadow="xs" radius="md">
            <form onSubmit={handleSearch}>
              <Text size="xl" weight={700} style={{ marginBottom: "1rem",padding:2 }}>
                Train Search
              </Text>
              <Select
                style={{ padding: 2 }}
                label="Select source"
                placeholder="Source"
                searchable
                data={sourceList}
                onSelect={(e) => setSource(e.target.value)}
              />
              <Select
                style={{ padding: 2 }}
                label="Select destinantion"
                searchable
                placeholder="Destinantion"
                data={destList}
                onSelect={(e) => setDestination(e.target.value)}
              />
              <Input
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{ marginBottom: "1rem" }}
              />

              <Button
                type="submit"
                variant="gradient"
                fullWidth
                onClick={() => {
                  console.log("src dest", source, destination);
                }}
              >
                {loading ? <Loader /> : "Search"}
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </BackgroundImage>
  );
}

export default TrainSearch;
