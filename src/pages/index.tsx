import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import styles from "src/styles/Verification.module.css"

import { Box, Card, CardBody, CardHeader, Heading, Link, Text } from "@chakra-ui/react"

const CodeVerification: BlitzPage = () => {
  return (
    <Layout title="Code Verification">
      <div className={styles.globe} />

      <div className={styles.container}>
        <Card variant="filled" backgroundColor="#1b1320">
          <CardHeader>
            <Heading as="h1">Enter the code we emailed you.</Heading>
          </CardHeader>

          <CardBody color="#CEC9D0">
            <Box textAlign="right">
              <Text as="b">
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
