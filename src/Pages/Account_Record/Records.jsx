import { useEffect, useState } from "react";
import { TransactionCard } from "./TransactionCard";
import { Text } from "@chakra-ui/react";

export const Records = ({ level, data }) => {

  return (
    <div className="transaction_container">
      {data.length === 0 ? (
        <Text as="abbr">No record</Text>
      ) : (
        <div>
          {data.map((ele, i) => (
            <TransactionCard card={ele} i={i} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};
