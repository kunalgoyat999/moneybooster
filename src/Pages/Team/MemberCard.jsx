import { Image, Text } from '@chakra-ui/react'

export const  MemberCard = ({card,i}) => {
        return(
        <>
      <div className='member_card'>
      <Image
  borderRadius='50%'
  boxSize='12%'
  src={card.img}
  alt='Dan Abramov'
/>
  <Text as='abbr'>{card.title}</Text>
      </div>
        </>
        )
    }