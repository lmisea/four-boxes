import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import styles from "src/styles/Verification.module.css"

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Link,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react"

const CodeVerification: BlitzPage = () => {
  return (
    <Layout title="Code Verification">
      <div className={styles.globe} />

      <div className={styles.container}>
        <Card variant="filled" backgroundColor="#1b1320">
          <CardHeader>
            <Heading as="h1">Enter the code we emailed you.</Heading>
          </CardHeader>

          <CardBody>
            <VStack>
              <HStack spacing="5">
                <PinInput
                  size="lg"
                  placeholder=""
                  colorScheme="whiteAlpha"
                  variant="filled"
                  focusBorderColor="#5684D4"
                  autoFocus={true}
                >
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3px" }}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6dvw"}
                    minH={"11dvh"}
                  />
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3px" }}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6dvw"}
                    minH={"11dvh"}
                  />
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3px" }}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6dvw"}
                    minH={"11dvh"}
                  />
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3px" }}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6dvw"}
                    minH={"11dvh"}
                  />
                </PinInput>
              </HStack>
            </VStack>

            <Box className={styles.email_text}>
              <Text>
                adam@gmail.com
                <br />
                <Link color="#5684D4">resend</Link>
              </Text>
            </Box>
          </CardBody>
        </Card>
      </div>
    </Layout>
  )
}

export default CodeVerification
