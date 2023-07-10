import { useEffect, useState } from "react";
import { MemberCard } from "./MemberCard";
import { Text } from "@chakra-ui/react";

export const TeamMember = ({ level, data }) => {
  console.log("dataaaaaaa", level, data);

  return (
    <div className="member_container">
      {data.length === 0 ? (
        <Text as="abbr">No record</Text>
      ) : (
        <div>
          {data.map((ele, i) => (
            <MemberCard card={ele} i={i} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};
