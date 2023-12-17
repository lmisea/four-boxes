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

// Function to place the cursor at the end of the input when the user clicks on it
const handleClick = (event) => {
  // Hide the cursor
  event.target.style.caretColor = "transparent"
  // Move the cursor to the end
  event.target.selectionStart = event.target.value.length
}

// Function to hide the cursor when the input is focused
const handleFocus = (event) => {
  // Hide the cursor
  event.target.style.caretColor = "transparent"
}

// Function to move the focus to the last input that the pasted data fits in
const handlePaste = (event) => {
  // Get all the inputs
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input")

  // Get the pasted data
  const pastedData = event.clipboardData.getData("text")

  // Skip the function if the clipboard contains two or less characters
  if (pastedData.length < 3) {
    return
  }

  // Search for the first empty input
  setTimeout(() => {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i]!.value === "") {
        // Set focus on the empty input
        inputs[i - 1]!.focus()
        // Stop the loop
        break
      }
      if (i === inputs.length - 1) {
        // Set focus on the last input
        inputs[i]!.focus()
      }
    }
  }, 10)
}

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
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3.8px" }}
                    onClick={handleClick}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6vw"}
                    minH={"11vh"}
                  />
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3.8px" }}
                    onClick={handleClick}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6vw"}
                    minH={"11vh"}
                  />
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3.8px" }}
                    onClick={handleClick}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6vw"}
                    minH={"11vh"}
                  />
                  <PinInputField
                    _focus={{ backgroundColor: "#E2E8F0", borderWidth: "3.8px" }}
                    onClick={handleClick}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    fontWeight="bolder"
                    fontSize="2.6em"
                    minW={"6vw"}
                    minH={"11vh"}
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
