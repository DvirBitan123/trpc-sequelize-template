import './App.css'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import {AppRouter} from '../../server/main';

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({
    url: 'http://localhost:3000/trpc'
  })]
})

const connection = async  () => {
  const res = await client.sayHi.query();
  console.log('res:', res);
  return res
}

const text = await connection()


function App() {
  return (
    <div>
      <span>my name is   </span>
      <span>{text}</span>
    </div>
  )
}

export default App
