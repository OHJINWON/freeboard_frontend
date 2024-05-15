import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "/styles/globals.css"
// import '../styles/fonts.css'
// import '/styles/fonts.css'

export default function App({ Component, pageProps }) {
  
  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    
  )
}
