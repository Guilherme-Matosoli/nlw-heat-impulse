import GlobalStyles from './styles/GlobalStyles'; 
import LoginBox from './components/LoginBox';
import MessageList from './components/MessageList';
import { Content } from './components/MessageList/styles';
import { AuthContext } from './contexts/auth';
import { useContext } from 'react';
import SendMessageForm from './components/SendMessageForm/index';

export const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <Content>

        <MessageList />
        { !!user ? <SendMessageForm /> : <LoginBox /> }

      </Content>
    
        <GlobalStyles />
    </div>
  )
}