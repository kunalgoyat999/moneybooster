import { Image, Text } from "@chakra-ui/react";

export const MemberCard = ({ card, i }) => {
  return (
    <>
      <div className="member_card" style={{width: "180%"}}>
      <img style={{width: "40px"}} src={require("../../assests/user.png")} alt="" />
        {/* <Image
          borderRadius="50%"
          // boxSize="12%"
          src="../../assests/user.png"
          // alt="Dan Abramov"
          width= "80%"
        /> */}
        {/* <div> */}
        <Text as="abbr">{card.name} ({card.email})</Text>
        {/* <p>{card.email}</p>
        </div> */}
      </div>
    </>
  );
};
