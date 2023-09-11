import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react"

const PageDivider = ({title}: {title: string}) => {
    return (
        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter bg='white' px='4' textColor={"maroon"}>
            {title}
          </AbsoluteCenter>
      </Box>
    )
}

export default PageDivider;