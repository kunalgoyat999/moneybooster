import { Image, Text, Box } from "@chakra-ui/react";
import { FaPlus, FaRupeeSign } from "react-icons/fa";  

export const TransactionCard = ({ card, i }) => {
  return (
    <>
      <div className="transcation_card" >
    
        <Box className="card_first_div">

           <Box className='t_img_box' bg={card.type=== ('Withdraw' || 'Plan amount') ?'#FF7985':'#92D990'} bgSize='3em'>
       {
        card.type==='Withdraw'?  <FaRupeeSign />:<FaPlus />
       }
            </Box>

            <Box className='transaction_tex'>
               <Text as='b'>{card.type}</Text>
               <Text as='abbr'>{card.date_time}</Text>
            </Box>

        </Box>
        <Text as="b" color={card.type===('Withdraw' || 'Plan amount') ?'#FF7985':'#92D990'}>{card.type===('Withdraw' || 'Plan amount') ?'-':'+'} {card.price} </Text>
        
      </div>
    </>
  );
};
